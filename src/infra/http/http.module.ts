import { Module } from '@nestjs/common';
import { SendNotificationUseCase } from '@application/useCases/sendNotification/SendNotificationUseCase';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { GetRecipientNotificationsUseCase } from '@application/useCases/getRecipientNotifications/GetRecipientNotificationsUseCase';
import { CancelNotificationUseCase } from '@application/useCases/cancelNotification/CancelNotificationUseCase';
import { CountRecipientNotificationsUseCase } from '@application/useCases/countRecipientNotifications/CountRecipientNotificationsUseCase';
import { ReadNotificationUseCase } from '@application/useCases/readNotification/ReadNotificationUseCase';
import { UnreadNotificationUseCase } from '@application/useCases/unreadNotification/UnreadNotificationUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotificationUseCase,
    GetRecipientNotificationsUseCase,
    CancelNotificationUseCase,
    CountRecipientNotificationsUseCase,
    ReadNotificationUseCase,
    UnreadNotificationUseCase,
  ],
  exports: [],
})
export class HttpModule {}
