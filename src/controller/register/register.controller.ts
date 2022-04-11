import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserModel } from 'src/dto/database.model';
import { RegisterDto } from 'src/dto/register.dto';
import { RegisterService } from 'src/service/register/register.service';

@Controller('register')
export class RegisterController {
    
    constructor(
        private registerService: RegisterService
    ) {}

    @Post()
    public registerNewUser(@Body() body: RegisterDto): UserModel {
        // validate requested 
        // process data 
        return  this.registerService.register(body);
    }
}

