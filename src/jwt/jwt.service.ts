import { Global, Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPPTIONS } from './jwt.constants';
import { JwtModuleOptions } from './jwt.interfaces';

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPPTIONS) private readonly options: JwtModuleOptions,
  ) {
    console.log(options);
  }
  hello() {
    console.log('hello');
  }
}
