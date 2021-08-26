import { Test, TestingModule } from '@nestjs/testing';
import { RandomController } from './random.controller';
import { RestaurantsService } from '../restaurants.service';
import { TypeOrmTestModule } from '@devniel/nestjs-typeorm-testing';
import { Restaurant } from '../entities/restaurant.entity';
import { RestaurantDetails } from '../entities/restaurant_details.entity';

describe('RandomController', () => {
  let controller: RandomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomController],
      providers: [RestaurantsService],
      imports: [TypeOrmTestModule.forTest([Restaurant, RestaurantDetails])],
    }).compile();

    controller = module.get<RandomController>(RandomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
