import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Signale } from 'signale';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    const log = new Signale();
    try {
      await this.$connect();
      return log.scope('Database').success('DataBase connected');
    } catch (error) {
      log
        .scope('Database')
        .fatal(`Error connecting to database: ${error.message}`);
      process.exit(1);
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    const log = new Signale();

    this.$on('beforeExit', async () => {
      await app.close();
      return log.scope('Database').info('Database shutdown');
    });
  }
}
