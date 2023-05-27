import {Column, Entity} from "typeorm";
import {Base} from "../../config/base";

@Entity("users")
export class UserEntity extends Base {
    @Column()
    username: string

    @Column()
    password: string

    @Column()
    firstName: string

    @Column()
    secondName: string
}