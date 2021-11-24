import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Community extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  comment?: string;

  
}
