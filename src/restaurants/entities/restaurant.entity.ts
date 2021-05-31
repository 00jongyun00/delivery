// entity 란 데이터 베이스 모델을 생각하면 이해하기 쉽다.

import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 아직 데이터베이스가 없어서 이해하기 쉽게 특징을 살펴본후 데이터 베이스를 추가할 예정
@ObjectType()
@Entity()
export class Restaurant {
  // Restaurant 를 위한 ObjectType 을 만들어 줍니다.
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field((type) => Boolean, { defaultValue: true })
  @Column({ default: true })
  @IsBoolean()
  @IsOptional()
  isVegan: boolean;

  @Field((type) => String)
  @Column()
  @IsString()
  address: string;

  @Field((type) => String)
  @Column()
  @IsString()
  ownerName: string;

  @Field((type) => String)
  @Column()
  @IsString()
  categoryName: string;
}

function Entitiy() {
  throw new Error('Function not implemented.');
}
