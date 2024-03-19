import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cat/cat.controller';
import { ArticlesModule } from './articles/articles.module';

@Module({
    imports: [ArticlesModule],
    controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
