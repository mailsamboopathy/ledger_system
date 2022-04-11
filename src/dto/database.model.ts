import { Gender, RegisterDto } from "./register.dto";

export enum DatabaseType {
    File,
    Postgres
}

export class UserModel{
    constructor(
        public id: string,
        public userId: string,
        public userType: string,
        public age: number,
        public gender: Gender,
        public firstName: string,
        public lastName: string,
        public middleName?: string,
        public password?: string,
        public confirmPassword?: string,
    ){}
}