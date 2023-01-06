import { Notification } from '../entities/Notification';
import { NotificationsRepositoryProps } from '../repositories/NotificationsRepositoryProps';

export class NotificationsRepositoryInMemory
  implements NotificationsRepositoryProps
{
  private notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
