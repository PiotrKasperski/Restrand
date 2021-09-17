import { Controller, Get, Param, Query, Header } from '@nestjs/common';
import { PlacesApiService } from '../places-api.service';
import { MapsApiService } from '../../maps-api/maps-api.service';

@Controller('places')
export class PlacesController {
  constructor(
    private readonly placesService: PlacesApiService,
    private readonly mapsService: MapsApiService,
  ) {}
  @Get(':id')
  async getPlacesDetails(@Param('id') id: string) {
    return await this.placesService.getDetails(id);
  }
  @Get()
  async getPlacesAutocomplete(@Query('q') query: string) {
    return await this.placesService.getAutocomplete(query);
  }
  //('content-type', 'image/png')

}
