import { Module } from '@nestjs/common';
import { AppController } from './application/controllers/app.controller';
import { AppService } from './app.service';
import { UsersController } from './application/controllers/users.controller';
import { AuthController } from './application/controllers/auth.controller';
import { PostsController } from './application/controllers/posts.controller';
import { UserService } from './domain/users/user.service';
import { PostsService } from './domain/posts/posts.service';
import { AuthService } from './domain/auth/auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
import {UserModule} from "./domain/users/user.module";
import {JwtModule} from "@nestjs/jwt";
import {dataSourceOptions} from "./infrastructure/dataSourceOptions";

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal: true, envFilePath: ".env"}),
    TypeOrmModule.forRoot(dataSourceOptions),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN
      }
    }),
    UserModule
  ],
  controllers: [AppController, UsersController, AuthController, PostsController],
  providers: [AppService, UserService, PostsService, AuthService],
})
export class AppModule {
  constructor() {
  }
}
