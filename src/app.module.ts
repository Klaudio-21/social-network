import { Module } from '@nestjs/common';
import {databaseProviders } from './databaze/database.providers'
// import {DatabaseModule } from './databaze/databaze.module'
// import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
// import {AuthModule} from './auth/auth.module'
import { UserSchema } from './auth/user.entety';




@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/social-network'), MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  // providers: [UserService],
})
export class AppModule {}