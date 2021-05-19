// entity 란 데이터 베이스 모델을 생각하면 이해하기 쉽다.

import { Field, ObjectType } from '@nestjs/graphql';

// 아직 데이터베이스가 없어서 이해하기 쉽게 특징을 살펴본후 데이터 베이스를 추가할 예정
@ObjectType()
export class Restaurant {
  // Restaurant 를 위한 ObjectType 을 만들어 줍니다.
  @Field((type) => String)
  name: string;
  @Field((type) => Boolean, { nullable: true })
  isGood: boolean;
}
