import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SendNotificationDto } from '@application/dtos/send-notification-dto';
import { SendNotificationUseCase } from '@application/useCases/sendNotification/SendNotificationUseCase';
import { ControllerNotificationMapper } from '../mappers/ControllerNotificationMapper';
import { GetRecipientNotificationsUseCase } from '@application/useCases/getRecipientNotifications/GetRecipientNotificationsUseCase';
import { RecipientNotificationsDto } from '@application/dtos/recipient-notifications.dto';
import { CancelNotificationUseCase } from '@application/useCases/cancelNotification/CancelNotificationUseCase';
import { FindNotificationDto } from '@application/dtos/find-notification-dto';
import { CountRecipientNotificationsUseCase } from '@application/useCases/countRecipientNotifications/CountRecipientNotificationsUseCase';
import { ReadNotificationUseCase } from '@application/useCases/readNotification/ReadNotificationUseCase';
import { UnreadNotificationUseCase } from '@application/useCases/unreadNotification/UnreadNotificationUseCase';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly sendNotificationUseCase: SendNotificationUseCase,
    private readonly getRecipientNotificationsUseCase: GetRecipientNotificationsUseCase,
    private readonly cancelNotificationUseCase: CancelNotificationUseCase,
    private readonly countRecipientNotificationsUseCase: CountRecipientNotificationsUseCase,
    private readonly readNotificationUseCase: ReadNotificationUseCase,
    private readonly unreadNotificationUseCase: UnreadNotificationUseCase,
  ) {}

  @Get(':recipient_id/get-notifications')
  async getRecipientNotifications(@Param() param: RecipientNotificationsDto) {
    return await this.getRecipientNotificationsUseCase.execute({
      recipient_id: param.recipient_id,
    });
  }

  @Get(':recipient_id/count-notifications')
  async countRecipientNotifications(@Param() param: RecipientNotificationsDto) {
    return await this.countRecipientNotificationsUseCase.execute({
      recipient_id: param.recipient_id,
    });
  }

  @Patch(':notification_id/cancel-notification')
  async cancelNotification(@Param() param: FindNotificationDto) {
    return await this.cancelNotificationUseCase.execute({
      notification_id: param.notification_id,
    });
  }

  @Patch(':notification_id/read-notification')
  async readNotification(@Param() param: FindNotificationDto) {
    return await this.readNotificationUseCase.execute({
      notification_id: param.notification_id,
    });
  }

  @Patch(':notification_id/unread-notification')
  async unreadNotification(@Param() param: FindNotificationDto) {
    return await this.unreadNotificationUseCase.execute({
      notification_id: param.notification_id,
    });
  }

  @Post()
  async sendNotification(
    @Body() { recipient_id, content, category }: SendNotificationDto,
  ) {
    const { notification } = await this.sendNotificationUseCase.execute({
      recipient_id,
      content,
      category,
    });

    return {
      notification: ControllerNotificationMapper.toHttp(notification),
    };
  }
}
