import { Notification } from '../entities/Notification';
import { NotificationsRepositoryProps } from '../repositories/NotificationsRepositoryProps';

export class NotificationsRepositoryInMemory
  implements NotificationsRepositoryProps
{
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async findById(notification_id: string): Promise<Notification | null> {
    const notification = this.notifications.find(n => n.id === notification_id);
    return notification ? notification : null;
  }

  async save(notification: Notification): Promise<void> {
    const index = this.notifications.findIndex(n => n.id === notification.id);
    this.notifications[index] = notification;
  }
}
