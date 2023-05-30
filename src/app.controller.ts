import {Controller, Delete, Get, Post, Put} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "GET DATA";
  }

  @Post()
  sendHello(): string {
    return "POST DATA";
  }

  @Put()
  update(): string {
    return "PUT DATA";
  }

  @Delete()
  delete(): string {
    return "DELETE DATA";
  }

}
