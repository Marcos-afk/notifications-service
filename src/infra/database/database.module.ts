import { Module } from '@nestjs/common';
import { NotificationsRepositoryProps } from 'src/application/repositories/NotificationsRepositoryProps';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/PrismaNotificationsRepository';

@Module({
  imports: [],
  controllers: [],
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
