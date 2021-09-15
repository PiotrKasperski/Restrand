import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RestaurantAddress {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  street?: string;
  @Column()
  street_number?: number;
  @Column()
  city?: string;
}
