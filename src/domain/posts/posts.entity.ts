import {Entity} from "typeorm";
import {BaseEntity} from "../../config/base.entity";

@Entity("posts")
export class PostsEntity extends BaseEntity {
}