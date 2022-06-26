import { IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true }) // each: true - irá verificar se cada elemento do array é uma string
  readonly tags: string[];
}
