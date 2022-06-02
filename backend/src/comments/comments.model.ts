import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'comment' })
export class Comment {
    @Field(type => ID)
    id: string;

    @Field()
    comment: string;

    @Field({nullable: true})
    attachment?: string

    @Field()
    creationDate: Number;
}