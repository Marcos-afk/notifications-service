import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/Notification';
import { NotificationsRepositoryProps } from '@application/repositories/NotificationsRepositoryProps';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/PrismaNotificationMapper';

@Injectable()
export class PrismaNotificationsRepository
  implements NotificationsRepositoryProps
{
  constructor(private prismaService: PrismaService) {}

  async findManyByRecipientId(recipient_id: string): Promise<Notification[]> {
    const notifications = await this.prismaService.notification.findMany({
      where: { recipient_id },
    });

    return notifications.map(notification =>
      PrismaNotificationMapper.toDomain(notification),
    );
  }

  async findById(notification_id: string): Promise<Notification | null> {
    const notification = await this.prismaService.notification.findUnique({
      where: { id: notification_id },
    });

    if (!notification) {
      return null;
    }

    return PrismaNotificationMapper.toDomain(notification);
  }

  async countManyByRecipientId(recipient_id: string): Promise<number> {
    const count = await this.prismaService.notification.count({
      where: { recipient_id },
    });

    return count;
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: raw,
    });
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.update({
      where: { id: raw.id },
      data: raw,
    });
  }
}
