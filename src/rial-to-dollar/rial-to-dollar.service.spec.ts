import { Test, TestingModule } from '@nestjs/testing';
import { RialToDollarService } from './rial-to-dollar.service';

describe('RialToDollarService', () => {
  let service: RialToDollarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RialToDollarService],
    }).compile();

    service = module.get<RialToDollarService>(RialToDollarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
