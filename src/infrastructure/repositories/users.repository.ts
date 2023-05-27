import {Injectable} from "@nestjs/common";
import {FindOneOptions, FindOptionsWhere, Repository} from "typeorm";
import {UserEntity} from "../../domain/users/user.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UsersRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly repo: Repository<UserEntity>
    ) {}

     save(data): Promise<UserEntity> {
        let entity: UserEntity = data as UserEntity;
        return this.repo.save(entity);
    }

    findOne(where: FindOneOptions<UserEntity>) {
        return this.repo.findOne(where)
    }

    find(where: FindOptionsWhere<UserEntity>) {
        return this.repo.find({where})
    }
}