import { Resolver, Query, Args } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  // graphql 에서 list를 명시하는방법
  @Query((returns) => [Restaurant])
  // typescript 에서 list를 명시하는 방법
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
}
