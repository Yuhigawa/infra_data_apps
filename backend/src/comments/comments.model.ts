import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'comment' })
export class Comment {
    @Field(type => ID)
    id: string;

    @Field()
    user_Id: string;

    @Field()
    comment: string;

    @Field(type => [String], {nullable: true})
    attachment?: string[]

    @Field()
    creationDate: Number;
}