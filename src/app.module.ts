import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StarwarsModule } from './starwars/starwars.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    StarwarsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
