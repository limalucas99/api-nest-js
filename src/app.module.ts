import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Lucas@36',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true, // NUNCA UTILIZAR ISSO EM PRODUÇÃO, NUNCA
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
