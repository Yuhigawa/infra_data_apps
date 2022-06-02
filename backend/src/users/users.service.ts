import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user.input';
import { UsersArgs } from './dto/user.args';
import { User } from './users.model';

import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
  private data: User[] = [];

  async create(data: NewUserInput): Promise<User> {
    let __id: string = randomUUID();

    let mock_data: User = {
      id: __id,
      creationDate: Date.now(),
      ...data
    }

    this.data.push(mock_data);

    return mock_data;
  }

  async findOneById(id: string): Promise<User> {
    let user_index = this.data.findIndex( el => el.id === id );

    if( user_index > 0 )
      return this.data[user_index];

    return {
      id: "",
      name: "",
      password: "",
      creationDate: 0,
      comments: [],
      description: "",
      image: ""
    }
  }

  async findAll(UsersArgs: UsersArgs): Promise<User[]> {
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