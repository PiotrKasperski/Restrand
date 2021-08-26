import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RestaurantDetails } from './restaurant_details.entity';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @OneToOne(() => RestaurantDetails)
  @JoinColumn()
  details?: RestaurantDetails;
}
