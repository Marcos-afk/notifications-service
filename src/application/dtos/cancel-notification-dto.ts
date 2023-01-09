import { IsNotEmpty, IsUUID } from 'class-validator';

export class CancelNotificationDto {
  @IsNotEmpty({ message: 'Campo id da notificação é requerido' })
  @IsUUID(4, {
    each: true,
    message: 'Campo id da notificação  deve ser um uuid de versão 4',
  })
  readonly notification_id: string;
}
