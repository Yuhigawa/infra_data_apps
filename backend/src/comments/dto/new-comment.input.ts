import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, IsOptional, Length, Min, MinLength } from 'class-validator';

@InputType()
export class NewCommentInput {
  @Field({ nullable: false })
  @MaxLength(200)
  @MinLength(1)
  comment: string;

  @Field({ nullable: false })
  @MaxLength(200)
  @MinLength(1)
  user_Id: string;

  @Field(type => [String], { nullable: true })
  @IsOptional()
  attachment?: string[];
}