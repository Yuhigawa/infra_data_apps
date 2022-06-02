import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { NewUserInput } from './dto/new-user.input';
import { UsersArgs } from './dto/user.args';
import { User } from './users.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) { }

    @Query(returns => User)
    async user(@Args('id') id: string): Promise<User> {
        const user = await this.usersService.findOneById(id);
        
        if (!user) {
            throw new NotFoundException(id);
        }

        return user;
    }

    @Query(returns => [User])
    users(@Args() UsersArgs: UsersArgs): Promise<User[]> {
        return this.usersService.findAll(UsersArgs);
    }

    @Mutation(returns => User)
    async addUser(
        @Args('newUserData') newUserData: NewUserInput,
    ): Promise<User> {
        const user = await this.usersService.create(newUserData);

        return user;
    }

    @Mutation(returns => Boolean)
    async removeUser(@Args('id') id: string) {
        return this.usersService.remove(id);
    }
}