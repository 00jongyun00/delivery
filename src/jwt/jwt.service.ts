import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { CONFIG_OPPTIONS } from './jwt.constants';
import { JwtModuleOptions } from './jwt.interfaces';

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPPTIONS) private readonly options: JwtModuleOptions,
  ) {
    console.log(options);
  }
  // token 에 너무 많은 정보를 넣지 않도록 ID 값만 받도록 변경
  sign(userId: number): string {
    return jwt.sign({ id: userId }, this.options.privateKey);
  }
}
