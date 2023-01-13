import { makeNotification } from '@application/factories/notification-factory';
import { NotificationsRepositoryInMemory } from '@application/in-memory/NotificationsRepositoryInMemory';
import { GetRecipientNotificationsUseCase } from './GetRecipientNotificationsUseCase';

let notificationsRepositoryInMemory: NotificationsRepositoryInMemory;
let getRecipientNotificationsUseCase: GetRecipientNotificationsUseCase;

describe('Get recipient notifications use case', () => {
  beforeEach(() => {
    notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
    getRecipientNotificationsUseCase = new GetRecipientNotificationsUseCase(
      notificationsRepositoryInMemory,
    );
  });

  it('should be able to return all notifications from a recipient', async () => {
    await notificationsRepositoryInMemory.create(makeNotification());
    await notificationsRepositoryInMemory.create(makeNotification());
    await notificationsRepositoryInMemory.create(makeNotification());

    const notifications = await getRecipientNotificationsUseCase.execute({
      recipient_id: '2e4e2157-1e71-4918-8af6-d255622a6465',
    });

    expect(notifications.length).toBe(3);
  });
});
