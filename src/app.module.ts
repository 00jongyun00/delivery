import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  // Graphql 의 root 모듈을 설정
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jongyunha',
      // password: '1234' localhost인 경우는 비밀번호를 생략해도 된다.
      database: 'nuber-eats',
      // typeorm 이 db에 연결할때 데이터베이스를 모듈의 현재 상태로 마이그레이션 한다는뜻
      synchronize: true,
      logging: true,
    }),
    RestaurantsModule,
    GraphQLModule.forRoot({
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // 경로에 gql 파일을 생성
      autoSchemaFile: true, // 메모리가 파일을생성하도록 설정
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
