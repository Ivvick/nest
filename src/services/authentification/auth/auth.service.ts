import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import { UsersService} from "../../users/users.service";

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
    constructor(private userService: UsersService) {
        super({usernameField: 'login', passwordField: 'psw'});
    }

    async validate(username: string, psw: string): Promise<any> {
        const user = await this.userService.checkAuthUser(username, psw);
        if (!user) {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                errorText: 'User not found in database',
            }, HttpStatus.CONFLICT);
        }
        return true;
    }
}