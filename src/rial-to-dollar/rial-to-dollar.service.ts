import { Injectable } from '@nestjs/common';
import { CurrencyConvertorService } from '../currency-convertor/currency-convertor.service';

@Injectable()
export class RialToDollarService {
    constructor(private readonly _currencyConvertorService: CurrencyConvertorService) {
        
        const resultAmount = this._currencyConvertorService.convert(800000)
        console.log(resultAmount);
    }
}
