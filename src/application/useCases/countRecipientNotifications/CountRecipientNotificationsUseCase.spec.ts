import { makeNotification } from '@application/factories/notification-factory';
import { NotificationsRepositoryInMemory } from '@application/in-memory/NotificationsRepositoryInMemory';
import { CountRecipientNotificationsUseCase } from './CountRecipientNotificationsUseCase';

let notificationsRepositoryInMemory: NotificationsRepositoryInMemory;
let countRecipientNotificationsUseCase: CountRecipientNotificationsUseCase;

describe('Count recipient notifications use case', () => {
  beforeEach(() => {
    notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
    countRecipientNotificationsUseCase = new CountRecipientNotificationsUseCase(
      notificationsRepositoryInMemory,
    );
  });

  it('should be able to return the number of user notifications', async () => {
    await notificationsRepositoryInMemory.create(makeNotification());
    const count = await countRecipientNotificationsUseCase.execute({
      recipient_id: '2e4e2157-1e71-4918-8af6-d255622a6465',
    });

    expect(count).toBe(1);
  });
});
