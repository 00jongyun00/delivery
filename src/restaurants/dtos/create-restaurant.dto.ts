// data transfer object
// inputType - 그저 하나의 object 입니다. argument 로써 graphql에 전달하기 위한 용도
// ArgsType - 분리된 값들을 GraphQL argument로 전달해 줄 수 있도록 해줌

import { InputType, Field, ArgsType, OmitType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
// OmitType 은 InputType 에서만 작동합니다.
// Object타입을 변경하기 위해 3번째 인자로 InputType 을 넣어줍니다.
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  InputType,
) {}
