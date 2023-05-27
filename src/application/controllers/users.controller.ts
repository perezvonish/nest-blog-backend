import { Controller } from '@nestjs/common';
import {UserService} from "../../domain/users/user.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UserService) {
    }
}
