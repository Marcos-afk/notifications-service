import { Notification } from '@application/entities/Notification';

export class ControllerNotificationMapper {
  static toHttp(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}
