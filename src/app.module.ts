import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyConvertorModule } from './currency-convertor/currency-convertor.module';
import { DollarToRialModule } from './dollar-to-rial/dollar-to-rial.module';
import { RialToDollarModule } from './rial-to-dollar/rial-to-dollar.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors/aligh.interceptor copy';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: `${process.env.NODE_ENV === 'development'? 'development':'production'}.env`}),
    CurrencyConvertorModule.forRootAsync({
      imports: [ConfigModule],
      injects: [ConfigService],
      useFactory: (configService :ConfigService) => {
        return {
          fee: configService.get('FEE')
        }
      }
    }),
    DollarToRialModule,
    RialToDollarModule
  ],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor
  }],
})
export class AppModule {}
