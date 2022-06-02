import { Module } from '@nestjs/common';
import { CommentsResolver } from './comments.resolve';
import { CommentsService } from './comments.service';

@Module({
  providers: [CommentsResolver, CommentsService],
})
export class CommentsModule {}