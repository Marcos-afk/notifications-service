import { Body, Controller, Post } from '@nestjs/common';
import { SendNotificationDto } from '@application/dtos/send-notification-dto';
import { SendNotificationUseCase } from '@application/useCases/sendNotification/SendNotificationUseCase';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly sendNotificationUseCase: SendNotificationUseCase,
  ) {}

  @Post()
  async create(
    @Body() { recipient_id, content, category }: SendNotificationDto,
  ) {
    const { notification } = await this.sendNotificationUseCase.execute({
      recipient_id,
      content,
      category,
    });

    return notification;
  }
}
