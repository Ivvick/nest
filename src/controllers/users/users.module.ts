import { Module } from '@nestjs/common';
import {UsersController} from "./users.controller";
import {UsersService} from "../../services/users/users.service";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../schemas/users";
import {PassportModule} from "@nestjs/passport";
import {AuthService} from "../../services/authentification/auth/auth.service";
import {JwtModule} from "@nestjs/jwt";
import {JwtConstants} from "../../static/private/constants";
import {JwtStrategyService} from "../../services/authentification/jwt-strategy/jwt-strategy.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
        secret: JwtConstants.secret,
    })],
    controllers: [UsersController],
    providers: [UsersService, AuthService, JwtStrategyService],
})
export class UsersModule {}
