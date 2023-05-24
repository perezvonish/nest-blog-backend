import { Controller } from '@nestjs/common';
import {UserService} from "../../domain/users/user.service";

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService) {
    }
}
