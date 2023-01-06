import {
  IsString,
  IsNotEmpty,
  IsUUID,
  MinLength,
  MaxLength,
} from 'class-validator';

export class SendNotificationDto {
  @IsNotEmpty({ message: 'Campo id do recipiente é requerido' })
  @IsUUID(4, {
    each: true,
    message: 'Campo id do recipiente deve ser um uuid de versão 4',
  })
  readonly recipient_id: string;

  @IsNotEmpty({ message: 'Campo conteúdo é requerido' })
  @IsString({ message: 'Campo conteúdo deve ser uma string' })
  @MinLength(5, { message: 'Campo conteúdo deve ter no mínimo 5 caracteres' })
  @MaxLength(240, {
    message: 'Campo conteúdo deve ter no máximo 240 caracteres',
  })
  readonly content: string;

  @IsNotEmpty({ message: 'Campo categoria é requerido' })
  @IsString({ message: 'Campo categoria deve ser uma string' })
  readonly category: string;
}
