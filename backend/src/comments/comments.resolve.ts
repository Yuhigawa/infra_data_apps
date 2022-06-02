import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { NewCommentInput } from './dto/new-comment.input';
import { CommentsArgs } from './dto/comment.args';
import { Comment } from './comments.model';
import { CommentsService } from './comments.service';

@Resolver(() => Comment)
export class CommentsResolver {
    constructor(private readonly commentsService: CommentsService) { }

    @Query(returns => Comment)
    async comment(@Args('id') id: string): Promise<Comment> {
        const comment = await this.commentsService.findOneById(id);
        
        if (!comment) {
            throw new NotFoundException(id);
        }

        return comment;
    }

    @Query(returns => [Comment])
    comments(@Args() CommentsArgs: CommentsArgs): Promise<Comment[]> {
        return this.commentsService.findAll(CommentsArgs);
    }

    @Mutation(returns => Comment)
    async addComment(
        @Args('newCommentData') newCommentData: NewCommentInput,
    ): Promise<Comment> {
        const comment = await this.commentsService.create(NewCommentInput);

        return comment;
    }

    @Mutation(returns => Boolean)
    async removeComment(@Args('id') id: string) {
        return this.commentsService.remove(id);
    }
}