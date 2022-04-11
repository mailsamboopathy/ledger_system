import { UserModel } from "src/dto/database.model";
import { RegisterDto } from "src/dto/register.dto";
import { User } from "src/repository/interface/user";


export class UserPostgres implements User {
    createUser(user: RegisterDto): UserModel {
        throw new Error("Method not implemented.");
    }
    getUserById(id: string): UserModel {
        throw new Error("Method not implemented.");
    }
    
}