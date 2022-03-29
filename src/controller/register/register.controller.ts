import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('register')
export class RegisterController {
    
    constructor() {}

    @Post()
    getRegisteredUser(@Body() body: any) {
        return "hello world";
    }
}
