import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationDto } from './dto/create-notification-dto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  find() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(
    @Body() { recipient_id, content, category }: CreateNotificationDto,
  ) {
    return await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        recipient_id,
        content,
        category,
      },
    });
  }
}
