import { Controller, Get, Logger } from '@nestjs/common';
import { RestaurantsService } from '../restaurants.service';

@Controller('random')
export class RandomController {
  constructor(private readonly restaurantsService: RestaurantsService) {}
  private readonly logger = new Logger(RandomController.name);
  @Get()
  randomResponse() {
    return this.restaurantsService.findRandom();
  }
}
