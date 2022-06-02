import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user ' })
export class User {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  image?: string;

  @Field()
  creationDate: Number;

  @Field(type => [String], { nullable: true })
  comments?: string[];
}