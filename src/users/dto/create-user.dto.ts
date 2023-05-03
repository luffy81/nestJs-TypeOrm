import {
  IsNotEmpty,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString({ message: 'name must be a text' })
  @MaxLength(255)
  @MinLength(3)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  @MinLength(3)
  @ApiProperty()
  email: string;
}
