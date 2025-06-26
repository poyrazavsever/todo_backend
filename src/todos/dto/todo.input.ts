import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty({ message: 'Bu alan boş bırakılamaz.' })
  @IsString({ message: 'Bu alan string olmak zorunda' })
  @MinLength(6)
  title: string;

  @IsNotEmpty({ message: 'Bu alan boş bırakılamaz.' })
  @IsString({ message: 'Bu alan string olmak zorunda' })
  @MinLength(16, { message: 'Bu alan en az 16 karakter olmak zorunda' })
  @MaxLength(256, { message: 'Bu alan en fazla 256 karakter olabilir.' })
  content: string;

  @IsNotEmpty({ message: 'Bu alan boş bırakılamaz.' })
  @IsString({ message: 'Bu alan string olmak zorunda' })
  @MinLength(4, { message: 'Bu alan en az 4 karakter olmak zorunda' })
  @MaxLength(64, { message: 'Bu alan en fazla 256 karakter olabilir.' })
  category: string;
}
