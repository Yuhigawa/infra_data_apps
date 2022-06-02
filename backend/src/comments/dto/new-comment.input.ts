import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, IsOptional, Length, Min, MinLength } from 'class-validator';

@InputType()
export class NewCommentInput {
  @Field()
  @MaxLength(200)
  @MinLength(1)
  comment: string;

  @Field({ nullable: true })
  @IsOptional()
  attachment?: string;
}