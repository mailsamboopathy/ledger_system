import { UserModel } from "src/dto/database.model";
import { RegisterDto } from "src/dto/register.dto";

export interface User {
    createUser(user: RegisterDto): UserModel;
    getUserById(id: string): UserModel
}