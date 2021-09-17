import {Controller, Get, Header} from '@nestjs/common';
import { MapsApiService } from '../maps-api.service';

@Controller('maps')
export class MapsController {
  constructor(private readonly mapsService: MapsApiService) {}
  @Get()
  async getMap() {
    return await this.mapsService.getStaticMap();
  }
}
