import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@application/entities/Notification';
import { Content } from '@application/entities/Content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipient_id: notification.recipientId,
      canceled_at: notification.canceledAt,
      read_at: notification.readAt,
      created_at: notification.createdAt,
    };
  }

  static toDomain(raw: RawNotification) {
    return new Notification(
      {
        content: new Content(raw.content),
        category: raw.category,
        recipient_id: raw.recipient_id,
        read_at: raw.read_at,
        canceled_at: raw.canceled_at,
        created_at: raw.created_at,
      },
      raw.id,
    );
  }
}
