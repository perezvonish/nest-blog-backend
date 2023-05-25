import { Module } from '@nestjs/common';
import { AppController } from './application/controllers/app.controller';
import { AppService } from './app.service';
import { UserController } from './application/controllers/user.controller';
import { AuthController } from './application/controllers/auth.controller';
import { PostsController } from './application/controllers/posts.controller';
import { UserService } from './domain/users/user.service';
import { PostsService } from './domain/posts/posts.service';
import { AuthService } from './domain/auth/auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
import ormConfig from "./infrastructure/ormConfig";

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true, envFilePath: ".env"}), TypeOrmModule.forRoot(ormConfig)],
  controllers: [AppController, UserController, AuthController, PostsController],
  providers: [AppService, UserService, PostsService, AuthService],
})
export class AppModule {
  constructor() {
  }
}
