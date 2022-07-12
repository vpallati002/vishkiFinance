import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AuditEntity {
  @Column({ type: 'varchar', length: 500, nullable: true })
  createdBy: number;

  @Column({ type: 'varchar', length: 500, nullable: true })
  updatedBy: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
