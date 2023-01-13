import { Notification } from '../entities/Notification';

export abstract class NotificationsRepositoryProps {
  abstract findManyByRecipientId(recipient_id: string): Promise<Notification[]>;
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notification_id: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipient_id: string): Promise<number>;
}
