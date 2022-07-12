import {
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

export class LookupEntity {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column()
  isActive: boolean;

  @Column()
  sortOrder: number;

}
  