import { Inject, Injectable } from '@nestjs/common';
import { GLOBAL_CONFIG_OPTIONS } from './constants/global-config-options.constant';
import { FROM_CURRENCY_CONFIG_OPTONS } from './constants/from-currency-config-options.constant';

@Injectable()
export class CurrencyConvertorService {

    

    private fee: number;
    private from: string;

    constructor(
        @Inject(GLOBAL_CONFIG_OPTIONS) globalConfig: any,
        @Inject(FROM_CURRENCY_CONFIG_OPTONS) fromCurrency: any
    ) {
        this.fee = globalConfig.fee
        this.from = fromCurrency.from
    }

    convert(currencyAmount: number) {
        let resultAmount: number;
        if(this.from === 'Rial') {
            resultAmount = (currencyAmount/42000) - (currencyAmount/42000)*this.fee/100
        } else if (this.from === 'Dollar') {
            resultAmount = (currencyAmount*42000) - (currencyAmount*42000)*this.fee/100
        } else {
            return `Your origin currency not supported.`
        }
        resultAmount = Math.round(resultAmount * 100) / 100
        const convertedTo = this.from === 'Rial'? 'Dollar':'Rial'
        return `Your $${currencyAmount} ${this.from}s is converted to $${resultAmount} ${convertedTo}s. ${this.fee}% is taked as commission`
    }
}
