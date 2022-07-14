import {
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

export class LookupEntity {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column()
  isActive: boolean;

  @Column()
  sortOrder: number;

}
  