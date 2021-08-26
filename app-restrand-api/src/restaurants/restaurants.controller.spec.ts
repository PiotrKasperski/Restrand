import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsController } from './restaurants.controller';
import { MockRestaurantsService } from './__mocks__/restaurants.service';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantDetails } from './entities/restaurant_details.entity';
import { TypeOrmTestModule } from '@devniel/nestjs-typeorm-testing';
import { RestaurantsService } from './restaurants.service';

describe('RestaurantsController', () => {
  let controller: RestaurantsController;
  beforeEach(async () => {
    //     {
    //   create: jest.fn((dto) => {
    //     return {
    //       id: Date.now(),
    //       ...dto,
    //     };
    //   }),
    // };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantsController],
      providers: [RestaurantsService],
      imports: [TypeOrmTestModule.forTest([Restaurant, RestaurantDetails])],
    })
      .overrideProvider(RestaurantsService)
      .useValue(MockRestaurantsService())
      .compile();

    controller = module.get<RestaurantsController>(RestaurantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //create()
  it('should create restaurand', () => {
    expect(controller.create({ name: 'test' })).toEqual({
      id: expect.any(Number),
      name: 'test',
    });
  });
  //findAll()
  it('should find all restaurants', async () => {
    const findAll = await controller.findAll();
    expect(Array.isArray(findAll)).toBe(true);
    expect(findAll[1]).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
    });
    expect(findAll).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
        }),
      ]),
    );
  });
  //update()
  it('should return update restaurant', async () => {
    expect(controller.update('1', { name: Date.now().toString() })).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      }),
    );
  });
  //remove
});
