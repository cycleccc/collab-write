import { Controller, Get, Res, Req, } from '@nestjs/common';
import { AppService } from './app.service';
import { RouteConfig, RouteConstraints } from '@nestjs/platform-fastify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    @RouteConfig({ output: 'hello world' })
    @RouteConstraints({ version: '1.2.x' })
    newFeature() {
        return 'This works only for version >= 1.2.x';
    }
    @Get()
    // index(@Req() req) {
    //     return req.routeConfig.output;
    // }
    getHello(): string {
        return this.appService.getHello();
    }
}
