import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/Notification';
import { NotificationsRepositoryProps } from '@application/repositories/NotificationsRepositoryProps';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository
  implements NotificationsRepositoryProps
{
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipient_id: notification.recipientId,
        read_at: notification.readAt,
        created_at: notification.createdAt,
      },
    });
  }
}
