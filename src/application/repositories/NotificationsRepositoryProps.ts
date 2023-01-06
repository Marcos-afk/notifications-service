import { Notification } from '../entities/Notification';

export abstract class NotificationsRepositoryProps {
  abstract create(notification: Notification): Promise<void>;
}
