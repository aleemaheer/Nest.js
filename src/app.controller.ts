import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Welcome Message
  @Get()
  welcome(): string {
    return this.appService.welcome();
  }

  // Testing Post API
  @Post("/name")
  post(@Body("name") name: string, @Body("age") age: number): object {
    return this.appService.testFunction(name, age);
  }

  // Testing
  @Get("/getAll")
  getAll(): object{
    return this.appService.getAll();
  }
}
