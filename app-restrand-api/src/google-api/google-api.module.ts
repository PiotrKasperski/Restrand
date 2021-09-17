import { HttpModule, Module } from '@nestjs/common';
import { PlacesApiService } from './places-api/places-api.service';
import { PlacesController } from './places-api/places/places.controller';
import { MapsApiService } from './maps-api/maps-api.service';
import { MapsController } from './maps-api/maps/maps.controller';

@Module({
  controllers: [PlacesController, MapsController],
  providers: [
    {
      provide: 'KEY',
      useValue: 'AIzaSyCIcgnnBIkOVlcMxUyqPShBbS8Sa0DTsKs',
    },
    PlacesApiService,
    MapsApiService,
  ],
  imports: [HttpModule],
  exports: [PlacesApiService],
})
export class GoogleApiModule {}
