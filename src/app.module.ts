import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthCheckController } from './controller/health-check/health-check.controller';
import { LoginController } from './controller/login/login.controller';
import { RegisterController } from './controller/register/register.controller';

@Module({
  imports: [],
  controllers: [HealthCheckController, LoginController, RegisterController],
  providers: [AppService],
})
export class AppModule {}
