import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { response } from 'express';

@Injectable()
export class PlacesApiService {
  constructor(private readonly http: HttpService) {}
  private key = '&key=AIzaSyCIcgnnBIkOVlcMxUyqPShBbS8Sa0DTsKs';
  async getAutocomplete(query: string) {
    return this.http
      .get(
        'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' +
          query +
          '%20near%20Wroclaw' +
          this.key,
      )
      .pipe(map((response) => response.data.predictions));
  }
  async getDetails(places_id: string) {
    return this.http
      .get(
        'https://maps.googleapis.com/maps/api/place/details/json?place_id=' +
          places_id +
          '&fields=name' +
          '%2Curl' +
          '%2Cformatted_phone_number' +
          '%2Caddress_component' +
          '%2Cgeometry' +
          '%2Cwebsite' +
          '%2Cinternational_phone_number' +
          '%2Copening_hours' +
          this.key,
      )
      .pipe(map((response) => this.placesDetailParser(response.data.result)));
  }
  private placesDetailParser(apiResponse) {
    return {
      name: apiResponse.name,
      details: {
        address: this.addressPraser(apiResponse.address_components),

        url: apiResponse.url,
        website: apiResponse.website,
        rest: apiResponse,
      },
    };
  }
  private addressPraser(address_components: Array<any>) {
    const address = {
      street: '',
      street_number: 0,
      city: '',
    };
    address_components.forEach((component) => {
      if (component.types.some((x) => x === 'street_number')) {
        address.street_number = component.long_name;
      }
      if (component.types.some((x) => x === 'route')) {
        address.street = component.long_name;
      }
      if (component.types.some((x) => x === 'locality')) {
        address.city = component.long_name;
      }
    });
    return address;
  }
}
