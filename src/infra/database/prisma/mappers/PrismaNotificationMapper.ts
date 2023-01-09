import { Notification } from '@application/entities/Notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipient_id: notification.recipientId,
      read_at: notification.readAt,
      created_at: notification.createdAt,
    };
  }
}
