import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsMongoId,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateTodoDto {
  @IsNotEmpty({ message: 'UserID boş bırakılamaz.' })
  @IsMongoId({ message: 'Geçerli bir MongoDB ID girilmeli' })
  userId: Types.ObjectId;

  @IsNotEmpty({ message: 'Başlık boş bırakılamaz.' })
  @IsString({ message: 'Başlık string olmak zorunda' })
  @MinLength(6, { message: 'Başlık en az 6 karakter olmak zorunda' })
  title: string;

  @IsNotEmpty({ message: 'İçerik boş bırakılamaz.' })
  @IsString({ message: 'İçerik string olmak zorunda' })
  @MinLength(16, { message: 'İçerik en az 16 karakter olmak zorunda' })
  @MaxLength(256, { message: 'İçerik en fazla 256 karakter olabilir.' })
  content: string;

  @IsNotEmpty({ message: 'Kategori boş bırakılamaz.' })
  @IsString({ message: 'Kategori string olmak zorunda' })
  @MinLength(4, { message: 'Kategori en az 4 karakter olmak zorunda' })
  @MaxLength(64, { message: 'Kategori en fazla 64 karakter olabilir.' })
  category: string;
}
