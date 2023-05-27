import {BadRequestException, ForbiddenException, Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthLogin, AuthRegister} from "../../application/dto/auth.dto";
import {UsersRepository} from "../../infrastructure/repositories/users.repository";
import {JwtService} from "@nestjs/jwt";
import {UserService} from "../users/user.service";
import {FindOneOptions} from "typeorm";
import {UserEntity} from "../users/user.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UsersRepository,
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ) {}

    async login(data: AuthLogin) {
        let flag: boolean = false;

        const clause: FindOneOptions<UserEntity> = {
            where: {
                username: data.username
            }
        }

        const user = await this.userService.findOne(clause)

        flag = await this.checkPassword(data.password, user.password)
        // if (!flag) throw new UnauthorizedException()

        const {id, username} = user
        return {
            token: await this.jwtService.signAsync({id, username})
        }
    }

    async register(data: AuthRegister): Promise<UserEntity> {
        const clause: FindOneOptions<UserEntity> = {
            where: {
                username: data.username
            }
        }
        const user = await this.userService.findOne(clause)
        if (user) {
            throw new ForbiddenException()
        }

        await this.checkPasswordRepeat(data.password, data.repeatPassword)
        const hash = await this.hashPassword(data.password)

        const newUser = {
            username: data.username,
            password: hash,
            firstName: data.firstName,
            secondName: data.secondName
        }

        return await this.userService.create(newUser);
    }

    private async hashPassword(password: string) {
        return await bcrypt.hash(password, 10);
    }

    private async checkPassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash)
    }

    private async checkPasswordRepeat(password: string, passwordRepeat: string) {
        if (password !== passwordRepeat) throw new BadRequestException()
    }
}
