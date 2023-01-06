import { Content } from './Content';
import { Notification } from './Notification';

describe('Entity Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma nova solicitação de amizade'),
      recipient_id: '2e4e2157-1e71-4918-8af6-d255622a6465',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
