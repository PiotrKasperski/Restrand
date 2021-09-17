import { HttpService, Injectable, Inject } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class MapsApiService {
  constructor(
    private readonly http: HttpService,
    @Inject('KEY') private KEY: string,
  ) {}
  async getStaticMap() {
    return (
      'https://maps.googleapis.com/maps/api/staticmap' +
      '?center=wroc%C5%82aw' +
      '+legnicka' +
      '+26' +
      '&zoom=12' +
      '&size=600x300&maptype=roadmap' +
      '&key=' +
      this.KEY
    );
  }
}
