import { DynamicModule, Module } from '@nestjs/common';
import { CurrencyConvertorService } from './currency-convertor.service';
import { GLOBAL_CONFIG_OPTIONS } from './constants/global-config-options.constant';
import { FROM_CURRENCY_CONFIG_OPTONS } from './constants/from-currency-config-options.constant';
import { GlobalConfigOptions } from './interfaces/global-config-interface';
import { FromCurrencyConfigOptions } from './interfaces/from-currency-interface';

@Module({})
export class CurrencyConvertorModule {
  static forRoot(globalConfigOptions: GlobalConfigOptions): DynamicModule {
    return {
      module: CurrencyConvertorModule,
      providers: [
        {
          provide: GLOBAL_CONFIG_OPTIONS,
          useValue: globalConfigOptions
        }
      ],
      exports: [GLOBAL_CONFIG_OPTIONS],
      global: true
    }
  }

  static forRootAsync(globalAsyncConfigOptions: any): DynamicModule {
    return {
      module: CurrencyConvertorModule,
      imports: globalAsyncConfigOptions.imports,
      providers: [
        {
          provide: GLOBAL_CONFIG_OPTIONS,
          inject: globalAsyncConfigOptions.injects,
          useFactory: globalAsyncConfigOptions.useFactory
        }
      ],
      exports: [GLOBAL_CONFIG_OPTIONS],
      global: true
    }
  }

  static forFeature(fromCurrencyConfigOptions: FromCurrencyConfigOptions): DynamicModule {
    return {
      module: CurrencyConvertorModule,
      providers: [
        {
          provide: FROM_CURRENCY_CONFIG_OPTONS,
          useValue: fromCurrencyConfigOptions
        },
        CurrencyConvertorService
      ],
      exports: [CurrencyConvertorService]
    }
  }
}
