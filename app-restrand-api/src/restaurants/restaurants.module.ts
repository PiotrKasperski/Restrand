import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantDetails } from './entities/restaurant_details.entity';
import { RandomController } from './random/random.controller';

@Module({
  controllers: [RestaurantsController, RandomController],
  providers: [RestaurantsService],
  imports: [TypeOrmModule.forFeature([Restaurant, RestaurantDetails])],
})
export class RestaurantsModule {}
