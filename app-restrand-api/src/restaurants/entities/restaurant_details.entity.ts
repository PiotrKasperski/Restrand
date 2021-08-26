import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RestaurantDetails {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  addres?: string | null;
  @Column()
  menu?: string | null;
  @Column()
  fb?: string | null;
}
