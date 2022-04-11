import { Injectable } from '@nestjs/common';
import { DatabaseType, UserModel } from 'src/dto/database.model';
import { RegisterDto } from 'src/dto/register.dto';
import { UserFile     } from 'src/repository/filestorage/user_file';
import { User         } from 'src/repository/interface/user';
import { UserPostgres } from 'src/repository/postgres/user_postgres';

@Injectable()
export class RegisterService {
    private userRepository: User;

    constructor() {
        this.setRepository(DatabaseType.File);
    }

    public register(user: RegisterDto): UserModel {
        let data: UserModel = this.userRepository.createUser(user);
        return data;
    }

    public setRepository(dbName: DatabaseType) {
        if (dbName === DatabaseType.File){
            this.userRepository = new UserFile();
        } else if (dbName === DatabaseType.Postgres) {
            this.userRepository = new UserPostgres();
        }
    }
}


