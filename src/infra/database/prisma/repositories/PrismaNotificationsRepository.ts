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

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: raw,
    });
  }

  async findById(notification_id: string): Promise<Notification | null> {
    throw new Error('não implementado');
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('não implementado');
  }
}
