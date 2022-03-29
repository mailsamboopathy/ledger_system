import { Controller, Get } from '@nestjs/common';

@Controller('health-check')
export class HealthCheckController {

    @Get()
    getHealthStatus(): any {
        return {message: "Application is running"};
    }
}
