export class CreateRestaurantDto {
  name: string;
  details?: CreateRestaurantDetailsDto;
}
export class CreateRestaurantDetailsDto {
  address?: CreateRestaurantAddressDto;
  url?: string;
  website?: string;
}
export class CreateRestaurantAddressDto {
  street?: string;
  street_number?: number; //TODO: change to string
  city?: string;
}
