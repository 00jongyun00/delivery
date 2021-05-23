// data transfer object
// inputType - 그저 하나의 object 입니다. argument 로써 graphql에 전달하기 위한 용도
// ArgsType - 분리된 값들을 GraphQL argument로 전달해 줄 수 있도록 해줌

import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateRestaurantDto {
  // @Args('name') name: string,
  // @Args('isVegan') isVegan: boolean,
  // @Args('address') address: string,
  // @Args('ownerName') ownerName: string,
  @Field((type) => String)
  @IsString()
  @Length(5, 10)
  name: string;
  @Field((type) => Boolean)
  @IsBoolean()
  isVegan: boolean;
  @Field((type) => String)
  @IsString()
  address: string;
  @Field((type) => String)
  @IsString()
  ownerName: string;
}
