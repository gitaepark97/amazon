import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { JwtGuard } from 'src/user/guards/jwt.guard'
import { JwtStrategy } from 'src/user/guards/jwt.strategy'
import { UserModule } from 'src/user/user.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'secret',
        signOptions: { expiresIn: '3600s' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtGuard, JwtStrategy],
})
export class AuthModule {}
