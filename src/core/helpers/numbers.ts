interface FormattedMoney {
  toString(): string;
  amount: number;
  currency: string;
}

export const formatMoney = ({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}): FormattedMoney => {
  const formattedAmount = amount;
  const formattedCurrency = currency.toUpperCase();

  return {
    toString: () =>
      `${formattedCurrency} ${formatNumericString(formattedAmount.toString())}`,
    amount: formattedAmount,
    currency: formattedCurrency,
  };
};

export function formatNumericString(num: string): string {
  if (num === "") {
    num = "0";
  }
  const precision = getPrecisionFromNumericString(num);
  return formatFloat(parseFloat(num), precision);
}

export function getPrecisionFromNumericString(num: string): number {
  if (!num.includes(".")) return 0;
  return num.substring(num.indexOf(".") + 1).length;
}

export function formatFloat(num: number, precision: number): string {
  return num.toLocaleString("en", {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });
}
