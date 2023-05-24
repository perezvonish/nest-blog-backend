import { Controller } from '@nestjs/common';
import {PostsService} from "../../domain/posts/posts.service";

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {
    }
}
