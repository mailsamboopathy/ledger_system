import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("message")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(":mid")
  getHello(@Param() params): any {
    return {data: params};
  }

  @Get(":mid/comment/:cid")
  getcomment(@Param() params, @Query() query): any {
    return {messageId: params['mid'], commentId: params['cid'], queryData: query};
  }
}
