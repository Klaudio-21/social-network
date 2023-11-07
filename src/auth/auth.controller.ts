import { Controller } from '@nestjs/common';
import { AuthCredentialsDto } from './auth-cerdentials.tdo';
import { AuthService } from './auth.service';
import {Body,Post} from '@nestjs/common'

@Controller('auth')
export class AuthController {
constructor(private authService:AuthService){}

@Post('/singup')
signUp(@Body()authCredentialsDto:AuthCredentialsDto):Promise<void>{
    return this.authService.signUp(authCredentialsDto)
}
@Post('/singin')
signIn(@Body()authCredentialsDto:AuthCredentialsDto):Promise<{accesToken:string}>{
    return this.authService.signIn(authCredentialsDto)
}


}
