import { Injectable, Logger } from '@nestjs/common';
import {
  CreateRestaurantAddressDto,
  CreateRestaurantDto,
} from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { RestaurantDetails } from './entities/restaurant_details.entity';
import { RestaurantAddress } from './entities/restaurant_address.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
    @InjectRepository(RestaurantDetails)
    private restaurantDetailsRepository: Repository<RestaurantDetails>,
    @InjectRepository(RestaurantAddress)
    private restaurantAddressRepository: Repository<RestaurantDetails>,
  ) {}
  private readonly logger = new Logger(RestaurantsService.name);
  private createAddress(
    newAddress: CreateRestaurantAddressDto,
  ): Promise<RestaurantAddress> {
    this.logger.log('createAddress');
    this.logger.log(newAddress);
    const address = new RestaurantAddress();
    address.street = newAddress.street;
    address.street_number = newAddress.street_number;
    address.city = newAddress.city;
    this.logger.log('New address created');
    return this.restaurantAddressRepository.save(address);
  }
  private async createDetails(
    newRestaurantDetails,
  ): Promise<RestaurantDetails> {
    this.logger.log('createDetails');
    this.logger.log(newRestaurantDetails);
    const details = new RestaurantDetails();
    details.url = newRestaurantDetails.url;
    details.website = newRestaurantDetails.website;
    details.address = await this.createAddress(newRestaurantDetails.address);
    return this.restaurantDetailsRepository.save(details);
  }
  async create(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<InsertResult> {
    this.logger.log('create');
    this.logger.log(createRestaurantDto.details);
    return this.restaurantRepository.insert({
      name: createRestaurantDto.name,
      details: await this.createDetails(createRestaurantDto.details),
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
    //TODO: get ren=st by rand and get rand details
    const repo: Array<Restaurant> = await this.restaurantRepository.find({
      relations: ['details'],
    });
    const rep: Array<Restaurant> = await this.restaurantRepository
      .createQueryBuilder('restaurant')
      .innerJoinAndSelect('restaurant.details', 'details')
      .innerJoinAndSelect('details.address', 'address')
      .getMany();
    this.logger.log(rep);
    return rep[Math.floor(Math.random() * repo.length)];
  }
}
