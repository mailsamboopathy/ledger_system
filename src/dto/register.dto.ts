export enum Gender {
    Male = "Male",
    Female = "Female"
}


export interface RegisterDto {
    userId: string;
    password: string;
    confirmPassword: string;
    userType: string;
    age: number;
    gender: Gender;
    firstName: string;
    lastName: string;
    middleName?: string;
}

