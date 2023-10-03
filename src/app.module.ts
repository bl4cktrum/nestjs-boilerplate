import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "../db/data-source";
import { ConfigModule } from "@nestjs/config";
import { appConfig } from "./app.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      envFilePath: `env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
