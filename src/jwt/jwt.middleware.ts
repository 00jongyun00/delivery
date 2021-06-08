import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

// implements 는 class 가 interface 처럼 동작하게 한다.
/* export class JwtMiddleware implements NestMiddleware {
 *   use(req: Request, res: Response, next: NextFunction) {
 *     console.log(req.headers);
 *     next();
 *   }
 * } */

export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(req.headers);
  next();
}
