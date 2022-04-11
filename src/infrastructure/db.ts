import { UserModel } from "src/dto/database.model";

export class FlatFileDb {

    constructor(
        public users: UserModel [] = []
    ){}

}

