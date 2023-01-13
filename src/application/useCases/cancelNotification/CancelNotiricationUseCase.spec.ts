import { makeNotification } from '@application/factories/notification-factory';
import { NotificationsRepositoryInMemory } from '@application/in-memory/NotificationsRepositoryInMemory';
import { NotificationNotFoundError } from '../errors/notification-not-found-error';
import { CancelNotificationUseCase } from './CancelNotificationUseCase';

let notificationsRepositoryInMemory: NotificationsRepositoryInMemory;
let cancelNotificationUseCase: CancelNotificationUseCase;

describe('Cancel notification use case', () => {
  beforeEach(() => {
    notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
    cancelNotificationUseCase = new CancelNotificationUseCase(
      notificationsRepositoryInMemory,
    );
  });

  it('should be able to cancel a notification', async () => {
    const notification = makeNotification();

    await notificationsRepositoryInMemory.create(notification);
    await cancelNotificationUseCase.execute({
      notification_id: notification.id,
    });

    expect(notificationsRepositoryInMemory.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a notification, notification not found', async () => {
    expect(
      cancelNotificationUseCase.execute({
        notification_id: '60d8f9fe-0eb5-4890-8dfe-f552befd13fa',
      }),
    ).rejects.toBeInstanceOf(NotificationNotFoundError);
  });
});
