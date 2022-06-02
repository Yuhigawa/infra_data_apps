import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, IsOptional, Length } from 'class-validator';

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  @MaxLength(30)
  password: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  description?: string;

  @Field({ nullable: true })
  image?: string;

  @Field(type => [String], { nullable: true })
  @IsOptional()
  @Length(30, 255)
  comments?: string[];
}