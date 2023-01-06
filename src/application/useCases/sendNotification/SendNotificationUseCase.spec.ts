import { NotificationsRepositoryInMemory } from '../../in-memory/NotificationsRepositoryInMemory';
import { SendNotificationUseCase } from './SendNotificationUseCase';

let notificationsRepositoryInMemory: NotificationsRepositoryInMemory;
let sendNotificationUseCase: SendNotificationUseCase;

describe('Send notification use case', () => {
  beforeEach(() => {
    notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
    sendNotificationUseCase = new SendNotificationUseCase(
      notificationsRepositoryInMemory,
    );
  });

  it('should be able to send a notification', async () => {
    const { notification } = await sendNotificationUseCase.execute({
      content: 'Você recebeu uma nova solicitação de amizade',
      recipient_id: '2e4e2157-1e71-4918-8af6-d255622a6465',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
