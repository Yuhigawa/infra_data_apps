import { Injectable } from '@nestjs/common';
import { NewCommentInput } from './dto/new-comment.input';
import { CommentsArgs } from './dto/comment.args';
import { Comment } from './comments.model';

import { randomUUID } from 'crypto';

@Injectable()
export class CommentsService {
  private data: Comment[] = [];

  async create(data: NewCommentInput): Promise<Comment> {
    let __id: string = randomUUID();

    let mock_data: Comment = {
      id: __id,
      creationDate: Date.now(),
      ...data
    }

    this.data.push(mock_data);

    return mock_data;
  }

  async findOneById(id: string): Promise<Comment> {
    let user_index = this.data.findIndex( el => el.id === id );

    if( user_index > 0 )
      return this.data[user_index];

    return {
      id: "",
      user_Id: "",
      comment: "",
      attachment: [],
      creationDate: 0
    }
  }

  async findAll(CommentsArgs: CommentsArgs): Promise<Comment[]> {
    return this.data;
  }

  async remove(id: string): Promise<boolean> {
    let user_index = this.data.findIndex( el => el.id === id );

    if( user_index > 0 ) {
      this.data.splice(user_index, 1);

      return true;
    }

    return false;
  }
}