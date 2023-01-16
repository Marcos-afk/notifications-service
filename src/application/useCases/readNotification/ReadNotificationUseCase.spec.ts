import { makeNotification } from '@application/factories/notification-factory';
import { NotificationsRepositoryInMemory } from '@application/in-memory/NotificationsRepositoryInMemory';
import { NotificationNotFoundError } from '../errors/notification-not-found-error';
import { ReadNotificationUseCase } from './ReadNotificationUseCase';

let notificationsRepositoryInMemory: NotificationsRepositoryInMemory;
let readNotificationUseCase: ReadNotificationUseCase;

describe('Read notification use case', () => {
  beforeEach(() => {
    notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
    readNotificationUseCase = new ReadNotificationUseCase(
      notificationsRepositoryInMemory,
    );
  });

  it('should be able to log a notification as read', async () => {
    const notification = makeNotification();

    await notificationsRepositoryInMemory.create(notification);
    await readNotificationUseCase.execute({ notification_id: notification.id });

    expect(notificationsRepositoryInMemory.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to log a notification as read, notification not found', async () => {
    expect(
      readNotificationUseCase.execute({
        notification_id: '60d8f9fe-0eb5-4890-8dfe-f552befd13fa',
      }),
    ).rejects.toBeInstanceOf(NotificationNotFoundError);
  });
});
