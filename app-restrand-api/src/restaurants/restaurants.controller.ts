import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  UseGuards,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import {JwtAuthGuard} from "../authentication/guards/jwt-auth.guard";

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}
  private readonly logger = new Logger(RestaurantsController.name);
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    this.logger.log('Request POST at /api/restaurants');
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get()
  async findAll(): Promise<Array<Restaurant>> {
    this.logger.log('Request at /api/restaurants');
    return await this.restaurantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantsService.findOne(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ) {
    return this.restaurantsService.update(+id, updateRestaurantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantsService.remove(+id);
  }
}
