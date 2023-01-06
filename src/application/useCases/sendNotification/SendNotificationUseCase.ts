import { Notification } from '../../entities/Notification';
import { Content } from '../../entities/Content';
import { SendNotificationDto } from '../../dtos/send-notification-dto';
import { NotificationsRepositoryProps } from '../../repositories/NotificationsRepositoryProps';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SendNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepositoryProps) {}

  public async execute({
    recipient_id,
    content,
    category,
  }: SendNotificationDto) {
    const notification = new Notification({
      recipient_id,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
