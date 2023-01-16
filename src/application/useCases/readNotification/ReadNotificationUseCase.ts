import { FindNotificationDto } from '@application/dtos/find-notification-dto';
import { NotificationsRepositoryProps } from '@application/repositories/NotificationsRepositoryProps';
import { Injectable } from '@nestjs/common';
import { NotificationNotFoundError } from '../errors/notification-not-found-error';

@Injectable()
export class ReadNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepositoryProps) {}

  public async execute({ notification_id }: FindNotificationDto) {
    const notification = await this.notificationsRepository.findById(
      notification_id,
    );

    if (!notification) {
      throw new NotificationNotFoundError();
    }

    notification.read();
    await this.notificationsRepository.save(notification);
  }
}
