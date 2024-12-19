import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FixbugService } from './fixbug/fixbug.service';
import { FizzBuzzService } from './fizz-buzz/fizz-buzz.service';
import { YahtZeeService } from './yaht-zee.service';
import { YahtZeeService } from './yaht-zee/yaht-zee.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FixbugService, FizzBuzzService, YahtZeeService],
})
export class AppModule {}
