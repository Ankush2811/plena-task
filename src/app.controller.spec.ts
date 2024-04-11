/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AccessKeyController } from './app.controller';
import { AccessKeyService } from './app.service';

describe('AccessKeyController', () => {
  let controller: AccessKeyController;
  let service: AccessKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessKeyController],
      providers: [AccessKeyService],
    }).compile();

    controller = module.get<AccessKeyController>(AccessKeyController);
    service = module.get<AccessKeyService>(AccessKeyService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should generate access key', async () => {
    const createKeyDto = { rateLimit: 10, expiration: 60 };
    const generatedKey = await controller.createKey(createKeyDto);
    expect(generatedKey.key).toBeDefined();
  });

});
