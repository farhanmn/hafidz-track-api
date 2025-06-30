import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger.utils';

const prismaClient = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query'
    },
    {
      emit: 'event',
      level: 'error'
    },
    {
      emit: 'event',
      level: 'info'
    },
    {
      emit: 'event',
      level: 'warn'
    }
  ]
});

prismaClient.$on('error', (e) => {
  logger.error(e);
});

prismaClient.$on('warn', (e) => {
  logger.warn(e);
});

prismaClient.$on('info', (e) => {
  logger.info(e);
});

prismaClient.$on('query', (e) => {
  logger.info(e);
});

const testDBConnection = async () => {
  try {
    await prismaClient.$connect();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
};

export { prismaClient, testDBConnection };
