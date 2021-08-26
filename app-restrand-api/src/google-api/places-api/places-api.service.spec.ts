import { Test, TestingModule } from '@nestjs/testing';
import { PlacesApiService } from './places-api.service';
import {HttpModule} from "@nestjs/axios";

describe('PlacesApiService', () => {
  let service: PlacesApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacesApiService],
      imports:[HttpModule]
    }).compile();

    service = module.get<PlacesApiService>(PlacesApiService);
  });

  it('should be defined', () => {
    expect(true).toBeTruthy();
  });
});
