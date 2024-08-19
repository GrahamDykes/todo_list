import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getNames(){
    return await this.appService.getNames();
  }

  @Post('/name')
  // async addName(@Body() body:string){
  //   return await this.appService.addName(body)
  //   return 'yay'
  //alternate
  async addName(@Body('name') name:string){
    return await this.appService.addName(name)
  }


}
