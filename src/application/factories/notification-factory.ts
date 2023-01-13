import { Content } from '@application/entities/Content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/Notification';

export type Override = Partial<NotificationProps>;

export const makeNotification = (override: Override = {}) => {
  return new Notification({
    content: new Content('Você recebeu uma nova solicitação de amizade'),
    recipient_id: '2e4e2157-1e71-4918-8af6-d255622a6465',
    category: 'social',
    ...override,
  });
};
