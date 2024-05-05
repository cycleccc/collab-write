import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserService } from './user.service'
import { PostService } from './post.service'
import { PrismaService } from './prisma.service'
import { EventModule } from './gatway/event.module'

@Module({
  imports: [EventModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService, PostService],
})
export class AppModule {}
