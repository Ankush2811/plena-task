/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AccessKeyController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AccessKeyService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(),],
  controllers: [AccessKeyController],
  providers: [AccessKeyService],
})
export class AppModule {}
