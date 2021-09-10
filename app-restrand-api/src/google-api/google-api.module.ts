import { HttpModule, Module } from '@nestjs/common';
import { PlacesApiService } from './places-api/places-api.service';
import { PlacesController } from './places-api/places/places.controller';

@Module({
  controllers: [PlacesController],
  providers: [PlacesApiService],
  imports: [HttpModule],
  exports: [PlacesApiService],
})
export class GoogleApiModule {}
