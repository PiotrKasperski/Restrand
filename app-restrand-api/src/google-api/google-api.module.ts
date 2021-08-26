import {HttpModule, Module} from '@nestjs/common';
import { PlacesApiService } from './places-api/places-api.service';

@Module({
  providers: [PlacesApiService],
  imports:[HttpModule],
  exports:[PlacesApiService]
})
export class GoogleApiModule {}
