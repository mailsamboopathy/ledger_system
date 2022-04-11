import { UserModel } from "src/dto/database.model";
import { RegisterDto } from "src/dto/register.dto";
import { FlatFileDb } from "src/infrastructure/db";

import { User } from "src/repository/interface/user";


export class UserFile implements User{
    public users: UserModel[];
    constructor() {
        let flatFileDb = new FlatFileDb();
        this.users = flatFileDb.users
    }

    createUser(user: RegisterDto): UserModel {
        let length: number = this.users.length + 1;
        let data: UserModel = new UserModel(
            String(length),
            user.userId,
            user.userType,
            user.age,
            user.gender,
            user.firstName,
            user.lastName,
            user.middleName,
            user.password,
            user.confirmPassword
        );
        this.users.push(data);
        return data;
    }
    getUserById(id: string): UserModel {
        throw new Error("Method not implemented.");
    }

}