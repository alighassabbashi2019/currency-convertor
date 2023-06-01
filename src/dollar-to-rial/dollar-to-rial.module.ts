import { Module } from '@nestjs/common';
import { CurrencyConvertorModule } from '../currency-convertor/currency-convertor.module';
import { DollarToRialService } from './dollar-to-rial.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
    imports: [
        CurrencyConvertorModule.forFeature({from: 'Dollar'})
    ],
    providers: [DollarToRialService],
    controllers: []
})
export class DollarToRialModule {}
