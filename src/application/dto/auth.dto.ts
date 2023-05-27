import {ApiProperty} from "@nestjs/swagger";

export class AuthLogin {
    @ApiProperty()
    username: string

    @ApiProperty()
    password: string
}

export class AuthRegister {
    @ApiProperty()
    username: string

    @ApiProperty()
    password: string

    @ApiProperty()
    repeatPassword: string

    @ApiProperty()
    firstName: string

    @ApiProperty()
    secondName: string
}

export interface AuthToken {
    token: string
}