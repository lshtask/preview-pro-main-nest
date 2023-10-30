import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user/login')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get()
  // getHello(): string {
  //   // return this.userService.getHello();
  // }
}
