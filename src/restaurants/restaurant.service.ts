import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    // Restaurant entity 의 repository를 inject하고 있다.
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>,
  ) {}
  // 실제로 DB에 접근하는 방식을 작성
  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find();
  }
}
