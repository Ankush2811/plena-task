/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { AccessKeyService } from './app.service';
import { CreateKeyDto, UpdateKeyDto } from './dto';

@Controller('access-keys')
export class AccessKeyController {
  constructor(private readonly accessKeyService: AccessKeyService) {}

  @Post()
  async createKey(@Body() createKeyDto: CreateKeyDto) {
    return this.accessKeyService.generateKey(createKeyDto);
  }

  @Get(':key')
  async getKeyDetails(@Param('key') key: string) {
    return this.accessKeyService.getKeyDetails(key);
  }

  @Delete(':key')
  async deleteKey(@Param('key') key: string) {
    return this.accessKeyService.deleteKey(key);
  }

  @Put(':key')
  async updateKey(@Param('key') key: string, @Body() updateKeyDto: UpdateKeyDto) {
    return this.accessKeyService.updateKey(key, updateKeyDto);
  }

  @Get('admin/list')
  async listKeys() {
    return this.accessKeyService.listKeys();
  }

  @Post('admin/create')
  async createKeyAdmin(@Body() createKeyDto: CreateKeyDto) {
    return this.accessKeyService.generateKey(createKeyDto);
  }

  @Delete('admin/delete/:key')
  async deleteKeyAdmin(@Param('key') key: string) {
    return this.accessKeyService.deleteKey(key);
  }

  @Put('admin/update/:key')
  async updateKeyAdmin(@Param('key') key: string, @Body() updateKeyDto: UpdateKeyDto) {
    return this.accessKeyService.updateKey(key, updateKeyDto);
  }
}
