import { RecipientNotificationsDto } from '@application/dtos/recipient-notifications.dto';
import { NotificationsRepositoryProps } from '@application/repositories/NotificationsRepositoryProps';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetRecipientNotificationsUseCase {
  constructor(private notificationsRepository: NotificationsRepositoryProps) {}

  async execute({ recipient_id }: RecipientNotificationsDto) {
    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipient_id);

    return notifications;
  }
}
