import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import LoggerMiddleware from './common/middleware/logger/logger.middleware';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [PrismaModule.forRoot(), ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
