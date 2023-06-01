import { Module } from '@nestjs/common';
import { CurrencyConvertorModule } from '../currency-convertor/currency-convertor.module';
import { RialToDollarService } from './rial-to-dollar.service';

@Module({
    imports: [
        CurrencyConvertorModule.forFeature({from: 'Rial'})
    ],
    providers: [RialToDollarService],
    controllers: []
})
export class RialToDollarModule {}
