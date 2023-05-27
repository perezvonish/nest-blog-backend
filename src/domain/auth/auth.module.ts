import {Module} from "@nestjs/common";
import {UserModule} from "../users/user.module";
import {AuthController} from "../../application/controllers/auth.controller";
import {AuthService} from "./auth.service";

@Module({
    imports: [
        UserModule,
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}