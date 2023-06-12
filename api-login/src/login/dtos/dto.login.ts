/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class Login {
 
id: number;

@IsNotEmpty()
email: string;

@IsNotEmpty()
password: string;
}

//for validate user  when create or delete

export class CreateLoginDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class DeleteLoginDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}