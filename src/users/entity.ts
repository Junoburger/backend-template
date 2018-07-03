import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Length } from 'class-validator';
import { IsEmail } from 'class-validator';



@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Length(2)
  @Column('text', {nullable:false})
  firstName: string

  @Length(2)
  @Column('text', {nullable:false})
  lastName: string

  @IsEmail()
  @Column('text', {nullable:false})
  email: string

  @Length(3)
  @Column('text')
  city: string
}