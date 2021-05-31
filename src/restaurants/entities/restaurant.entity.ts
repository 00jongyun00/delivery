// entity 란 데이터 베이스 모델을 생각하면 이해하기 쉽다.

import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

// 아직 데이터베이스가 없어서 이해하기 쉽게 특징을 살펴본후 데이터 베이스를 추가할 예정
@ObjectType()
@Entity()
export class Restaurant {
  // Restaurant 를 위한 ObjectType 을 만들어 줍니다.
  @PrimaryColumn()
  @Field((type) => Number)
  id: number;
  @Field((type) => String)
  @Column()
  name: string;

  @Field((type) => Boolean)
  @Column()
  isVegan: boolean;

  @Field((type) => String)
  @Column()
  address: string;

  @Field((type) => String)
  @Column()
  ownerName: string;

  @Field((type) => String)
  @Column()
  categoryName: string;
}

function Entitiy() {
  throw new Error('Function not implemented.');
}
