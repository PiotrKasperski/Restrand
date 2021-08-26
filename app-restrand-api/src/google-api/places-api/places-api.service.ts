import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class PlacesApiService {
  constructor(private readonly http: HttpService) {}
  getAutocomplete(query: string) {
    return null;
    // this.http.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json' +
    //     '?input=jaffa' +
    //     '&inputtype=textquery' +
    //     // '&languaguage=pl' +
    //     // '&location=51.1000,17.0333' +
    //     '&key=AIzaSyCIcgnnBIkOVlcMxUyqPShBbS8Sa0DTsKs')
  }
}
