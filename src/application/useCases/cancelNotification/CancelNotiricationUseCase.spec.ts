import { Content } from '@application/entities/Content';
import { Notification } from '@application/entities/Notification';
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
    const notification = new Notification({
      content: new Content('Você recebeu uma nova solicitação de amizade'),
      recipient_id: '2e4e2157-1e71-4918-8af6-d255622a6465',
      category: 'social',
    });

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
