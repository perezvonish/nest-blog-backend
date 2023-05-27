import { Injectable } from '@nestjs/common';
import {UsersRepository} from "../../infrastructure/repositories/users.repository";
import {FindOneOptions} from "typeorm";
import {UserEntity} from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        private readonly usersRepository: UsersRepository
    ) {}

    async create(data) {
        console.log(data)
        return await this.usersRepository.save(data)
    }

    findOne(where: FindOneOptions<UserEntity>) {
        return this.usersRepository.findOne(where)
    }
}
