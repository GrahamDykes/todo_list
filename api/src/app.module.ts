import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Name } from './name.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABSE_HOST,
      port: parseInt(process.env.DATABSE_PORT),
      username: process.env.DATABSE_USERNAME,
      password: `${process.env.DATABSE_PASSWORD}`,
      database: process.env.DATABSE_NAME,
      entities: [Name],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Name])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
