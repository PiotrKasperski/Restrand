import { Injectable, Logger } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { RestaurantDetails } from './entities/restaurant_details.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
    @InjectRepository(RestaurantDetails)
    private restaurantRepositoryDetails: Repository<RestaurantDetails>,
  ) {}
  private readonly logger = new Logger(RestaurantsService.name);
  async create(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<InsertResult> {
    const details = new RestaurantDetails();
    details.addres = createRestaurantDto.details.address
      ? createRestaurantDto.details.address
      : '';
    details.fb = createRestaurantDto.details.fb
      ? createRestaurantDto.details.fb
      : '';
    details.menu = createRestaurantDto.details.menu
      ? createRestaurantDto.details.menu
      : '';
    return this.restaurantRepository.insert({
      name: createRestaurantDto.name,
      details: await this.restaurantRepositoryDetails.save(details),
    });
  }

  findAll(): Promise<Restaurant[]> {
    return this.restaurantRepository.find({ relations: ['details'] });
  }

  findOne(id: number): Promise<Restaurant> {
    return this.restaurantRepository.findOne(id);
  }

  update(
    id: number,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantRepository.save({ id: id, ...updateRestaurantDto });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.restaurantRepository.delete({ id: id });
  }
  async findRandom(): Promise<Restaurant> {
    const repo: Array<Restaurant> = await this.restaurantRepository.find();
    return repo[Math.floor(Math.random() * repo.length)];
  }
}
