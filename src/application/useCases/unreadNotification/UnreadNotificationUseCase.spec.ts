import { makeNotification } from '@application/factories/notification-factory';
import { NotificationsRepositoryInMemory } from '@application/in-memory/NotificationsRepositoryInMemory';
import { NotificationNotFoundError } from '../errors/notification-not-found-error';
import { UnreadNotificationUseCase } from './UnreadNotificationUseCase';

let notificationsRepositoryInMemory: NotificationsRepositoryInMemory;
let unreadNotificationUseCase: UnreadNotificationUseCase;

describe('Unread notification use case', () => {
  beforeEach(() => {
    notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
    unreadNotificationUseCase = new UnreadNotificationUseCase(
      notificationsRepositoryInMemory,
    );
  });

  it('should be able to unread a notification', async () => {
    const notification = makeNotification({
      read_at: new Date(),
    });

    await notificationsRepositoryInMemory.create(notification);
    await unreadNotificationUseCase.execute({
      notification_id: notification.id,
    });

    expect(notificationsRepositoryInMemory.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a notification, notification not found', async () => {
    expect(
      unreadNotificationUseCase.execute({
        notification_id: '60d8f9fe-0eb5-4890-8dfe-f552befd13fa',
      }),
    ).rejects.toBeInstanceOf(NotificationNotFoundError);
  });
});
