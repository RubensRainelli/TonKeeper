import { FiatCurrency, FiatCurrencySymbolsConfig } from '$shared/constants';
import BigNumber from 'bignumber.js';
import {
  formatAmount,
  formatInputAmount,
  parseLocaleNumber,
  toLocaleNumber,
  truncateDecimal,
} from './number';

export function formatFiatCurrencyAmount(
  amount: any,
  currency: FiatCurrency,
  hasThinSpace?: boolean,
  hasNegative?: boolean,
): string {
  const conf = FiatCurrencySymbolsConfig[currency];
  if (!conf) {
    return `${toLocaleNumber(amount)} ${currency?.toUpperCase()}`;
  }

  const maybeNegative = hasNegative ? '− ' : '';
  const maybeThinSpace = hasThinSpace ? ' ' : '';
  if (conf.side === 'start') {
    return `${maybeNegative}${conf.symbol}${maybeThinSpace}${toLocaleNumber(amount)}`;
  } else {
    return `${maybeNegative}${toLocaleNumber(amount)}${maybeThinSpace}${conf.symbol}`;
  }
}

// Formats amount in currency
export function formatCryptoCurrency(
  amount: string,
  currency: string,
  decimals: number,
  decimal?: number,
  withGrouping?: boolean,
): string {
  if (amount) {
    amount = amount.replace(',', '.');

    amount = formatAmount(amount, decimals, withGrouping);

    if (decimal !== undefined) {
      amount = truncateDecimal(amount, decimal);
    }

    if (+amount < 0) {
      amount = `${'− '}${amount.replace('-', '')}`;
    }
  }

  return `${toLocaleNumber(amount)} ${currency?.toUpperCase()}`;
}

export const cryptoToFiat = (
  input: string,
  fiatRate: number,
  decimals: number,
  skipFormatting?: boolean,
) => {
  if (!fiatRate || fiatRate <= 0) {
    return '0';
  }

  const bigNum = new BigNumber(parseLocaleNumber(input) || 0);

  const calculated = bigNum.multipliedBy(fiatRate);

  const formatted = calculated.toFormat(decimals, undefined, {
    decimalSeparator: '.',
    groupSeparator: '',
  });

  return formatInputAmount(
    formatted === '0.00' ? '0' : formatted,
    decimals,
    skipFormatting,
  );
};

export const fiatToCrypto = (
  input: string,
  fiatRate: number,
  decimals: number,
  skipFormatting?: boolean,
) => {
  if (!fiatRate || fiatRate <= 0) {
    return '0';
  }

  const bigNum = new BigNumber(parseLocaleNumber(input) || 0);

  const calculated = bigNum.dividedBy(fiatRate);

  return formatInputAmount(calculated.toString(), decimals, skipFormatting);
};
