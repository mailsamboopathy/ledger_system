import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {

    @Get()
    getUser() {
        return {message: "login controller working"};
    }
}
