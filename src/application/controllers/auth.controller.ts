import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "../../domain/auth/auth.service";
import {AuthLogin, AuthRegister} from "../dto/auth.dto";
import {UserEntity} from "../../domain/users/user.entity";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post("login")
    async login(@Body() body: AuthLogin) {
        console.log(`Tyt --> ${body}`)
        return await this.authService.login(body);
    }

    @Post("register")
    async register(@Body() body: AuthRegister): Promise<UserEntity> {
        return await this.authService.register(body);
    }
}
