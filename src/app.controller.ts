import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  test(): string {
    console.log('changed');
    return 'test2';
  }

  @Get('/whip')
  mine(): string {
    return 'whip';
  }

  @Get('/myTest')
  myTest(): string {
    return 'myTest';
  }

  @Get('/myTest3')
  myTest2(): string {
    return 'myTest3';
  }
}
