import {Controller, Get, Param, Query} from '@nestjs/common';
import { PlacesApiService } from '../places-api.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesApiService) {}
  @Get(':id')
  async getPlacesDetails(@Param('id') id: string) {
    return await this.placesService.getDetails(id);
  }
  @Get()
  async getPlacesAutocomplete(@Query('q') query: string) {
    return await this.placesService.getAutocomplete(query);
  }
}
