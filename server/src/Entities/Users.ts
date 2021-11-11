import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  username!: string;

  @Column()
  levelStrand!: string;

  @Column()
  school!: string;

  @Column()
  password!: string;
}
