export class CreateRestaurantDto {
  name: string;
  details?: {
    address?: string;
    menu?: string;
    fb?: string;
  };
}
