import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsService } from './restaurants.service';
import {TypeOrmTestModule} from "@devniel/nestjs-typeorm-testing";
import {Restaurant} from "./entities/restaurant.entity";
import {RestaurantDetails} from "./entities/restaurant_details.entity";

describe('RestaurantsService', () => {
  let service: RestaurantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantsService],
      imports: [TypeOrmTestModule.forTest([Restaurant, RestaurantDetails])],
    }).compile();

    service = module.get<RestaurantsService>(RestaurantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
