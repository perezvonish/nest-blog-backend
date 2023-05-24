import { Module } from '@nestjs/common';
import { AppController } from './application/controllers/app.controller';
import { AppService } from './app.service';
import { UsersController } from './application/controllers/users.controller';
import { AuthController } from './application/controllers/auth.controller';
import { PostsController } from './application/controllers/posts.controller';
import { UsersService } from './domain/users/users.service';
import { PostsService } from './domain/posts/posts.service';
import { AuthService } from './domain/auth/auth.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, AuthController, PostsController],
  providers: [AppService, UsersService, PostsService, AuthService],
})
export class AppModule {}
