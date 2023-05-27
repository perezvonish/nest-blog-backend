import {Module} from "@nestjs/common";
import {UsersRepository} from "../../infrastructure/repositories/users.repository";
import {UsersController} from "../../application/controllers/users.controller";
import {Repository} from "typeorm";
import {UserEntity} from "./user.entity";
import {UserService} from "./user.service";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UsersController],
    providers: [UserService, UsersRepository, Repository<UserEntity>],
    exports: [
        UserService, UsersRepository
    ]
})
export class UserModule {}