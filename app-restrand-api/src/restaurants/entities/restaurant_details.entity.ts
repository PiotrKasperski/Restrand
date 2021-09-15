import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { RestaurantAddress } from './restaurant_address.entity';

@Entity()
export class RestaurantDetails {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => RestaurantAddress)
  @JoinColumn()
  address?: RestaurantAddress;
  @Column()
  url?: string;
  @Column()
  website?: string;
}
/*{
      address: {
 ,
     url: '',
     website: '',
     rest: '',
   }*/
