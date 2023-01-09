import { Module } from '@nestjs/common';
import { SendNotificationUseCase } from '@application/useCases/sendNotification/SendNotificationUseCase';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  exports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotificationUseCase],
})
export class HttpModule {}
