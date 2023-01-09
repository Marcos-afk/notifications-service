import { Module } from '@nestjs/common';
import { NotificationsRepositoryProps } from '@application/repositories/NotificationsRepositoryProps';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/PrismaNotificationsRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepositoryProps,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepositoryProps],
})
export class DatabaseModule {}
