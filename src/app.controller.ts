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

  @Get('/mine')
  mine(): string {
    return 'mine';
  }

  @Get('/mine2')
  mine2(): string {
    return 'mine2';
  }

  @Get('/mine3')
  mine3(): string {
    return 'mine3';
  }

  @Get('/mine4')
  mine4(): string {
    return 'mine4';
  }

  @Get('/mine5')
  mine5(): string {
    return 'mine5';
  }

  @Get('/mine6')
  mine6(): string {
    return 'mine6';
  }
}
