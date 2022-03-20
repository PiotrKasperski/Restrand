import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [AuthenticationService, LocalStrategy, JwtStrategy],
  imports: [
    ConfigModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret', //TODO: change to env variable
      signOptions: { expiresIn: '60s' },
    }),
    UsersModule,
  ],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
