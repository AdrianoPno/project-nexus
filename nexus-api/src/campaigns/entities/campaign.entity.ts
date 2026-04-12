import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('campaigns')
export class Campaign {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ default: true })
  isActive!: boolean;

  @Column('simple-array')
  availableRegions!: string[]; // Ex: ["SP", "RJ", "MG"]

  @CreateDateColumn()
  createdAt!: Date;
}