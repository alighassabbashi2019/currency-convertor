import { Injectable } from '@nestjs/common';
import { CurrencyConvertorService } from '../currency-convertor/currency-convertor.service';

@Injectable()
export class DollarToRialService {
    constructor(private readonly _currencyConvertorService: CurrencyConvertorService) {

        const resultAmount = this._currencyConvertorService.convert(12)
        console.log(resultAmount)
    }
}
