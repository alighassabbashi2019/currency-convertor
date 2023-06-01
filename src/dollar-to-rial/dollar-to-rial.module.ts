import { Module } from '@nestjs/common';
import { CurrencyConvertorModule } from '../currency-convertor/currency-convertor.module';
import { DollarToRialService } from './dollar-to-rial.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../interceptors/aligh.interceptor';

@Module({
    imports: [
        CurrencyConvertorModule.forFeature({from: 'Dollar'})
    ],
    providers: [DollarToRialService, {provide: APP_INTERCEPTOR, useClass: LoggingInterceptor}],
    controllers: []
})
export class DollarToRialModule {}
