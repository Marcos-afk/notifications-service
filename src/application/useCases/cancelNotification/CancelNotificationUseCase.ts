import { CancelNotificationDto } from '@application/dtos/cancel-notification-dto';
import { NotificationsRepositoryProps } from '@application/repositories/NotificationsRepositoryProps';
import { Injectable } from '@nestjs/common';
import { NotificationNotFoundError } from '../errors/notification-not-found-error';

@Injectable()
export class CancelNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepositoryProps) {}

  public async execute({ notification_id }: CancelNotificationDto) {
    const notification = await this.notificationsRepository.findById(
      notification_id,
    );

    if (!notification) {
      throw new NotificationNotFoundError();
    }

    notification.cancel();
    await this.notificationsRepository.save(notification);
  }
}
