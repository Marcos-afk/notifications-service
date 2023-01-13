import { CountRecipientNotificationsDto } from '@application/dtos/count-recipient-notifications.dto';
import { NotificationsRepositoryProps } from '@application/repositories/NotificationsRepositoryProps';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CountRecipientNotificationsUseCase {
  constructor(private notificationsRepository: NotificationsRepositoryProps) {}

  async execute({ recipient_id }: CountRecipientNotificationsDto) {
    const count = await this.notificationsRepository.countManyByRecipientId(
      recipient_id,
    );

    return count;
  }
}
