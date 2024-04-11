/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

// uma depemdência que pode ser injetável. Posso importar em outras áreas da aplicação
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
