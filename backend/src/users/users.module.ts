import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolve';
import { UsersService } from './users.service';

@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}