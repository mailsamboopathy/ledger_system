import { Module } from '@nestjs/common';
import { HealthCheckController } from './controller/health-check/health-check.controller';
import { LoginController } from './controller/login/login.controller';
import { RegisterController } from './controller/register/register.controller';
import { RegisterService } from './service/register/register.service';

@Module({
  imports: [],
  controllers: [HealthCheckController, LoginController, RegisterController],
  providers: [RegisterService],
})
export class AppModule {}
