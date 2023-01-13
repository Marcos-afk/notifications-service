import { Notification } from '../entities/Notification';
import { NotificationsRepositoryProps } from '../repositories/NotificationsRepositoryProps';

export class NotificationsRepositoryInMemory
  implements NotificationsRepositoryProps
{
  public notifications: Notification[] = [];

  async findManyByRecipientId(recipient_id: string): Promise<Notification[]> {
    return this.notifications.filter(n => n.recipientId === recipient_id);
  }

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async findById(notification_id: string): Promise<Notification | null> {
    const notification = this.notifications.find(n => n.id === notification_id);
    return notification ? notification : null;
  }

  async countManyByRecipientId(recipient_id: string): Promise<number> {
    const notifications = this.notifications.filter(
      r => r.recipientId === recipient_id,
    );

    return notifications.length;
  }

  async save(notification: Notification): Promise<void> {
    const index = this.notifications.findIndex(n => n.id === notification.id);
    this.notifications[index] = notification;
  }
}
