import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  // graphql 에서 list를 명시하는방법
  @Query((returns) => [Restaurant])
  // typescript 에서 list를 명시하는 방법
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
  @Mutation((returns) => Boolean)
  createRestaurant(
    // @Args('name') name: string,
    // @Args('isVegan') isVegan: boolean,
    // @Args('address') address: string,
    // @Args('ownerName') ownerName: string,
    @Args() createRestaurantInput: CreateRestaurantDto,
  ): boolean {
    console.log(createRestaurantInput);
    return true;
  }
}
