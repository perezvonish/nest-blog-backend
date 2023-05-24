import {Column, Entity} from "typeorm";
import {BaseEntity} from "../../config/base.entity";

@Entity("users")
export class UserEntity extends BaseEntity {
    @Column()
    username: string

    @Column()
    password: string

    @Column()
    firstName: string

    @Column()
    secondName: string
}