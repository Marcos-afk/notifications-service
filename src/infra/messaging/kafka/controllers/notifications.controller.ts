import { SendNotificationUseCase } from '@application/useCases/sendNotification/SendNotificationUseCase';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayloadProps {
  recipient_id: string;
  content: string;
  category: string;
}

@Controller()
export class NotificationsController {
  constructor(
    private readonly sendNotificationUseCase: SendNotificationUseCase,
  ) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload()
    { content, recipient_id, category }: SendNotificationPayloadProps,
  ) {
    await this.sendNotificationUseCase.execute({
      content,
      recipient_id,
      category,
    });
  }
}
