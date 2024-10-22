import dayjs from "dayjs";

export const dateFormat = (value: string, format: string = "yearly") => {
  if (format === "hourly") {
    return value ? dayjs(value).format("DD-MM-YYYY hh:mm") : null;
  }
  return value && dayjs(value).format("DD-MM-YYYY");
};

export const currencyFormatter = (
  value: number,
  currency: string | null = null,
  format: string = "en-PK"
): string => {
  const options: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
  };

  if (currency) {
    options.style = "currency";
    options.currency = currency;
  }

  const numberFormatter = new Intl.NumberFormat(format, options);

  // Format the absolute value first
  let formattedValue = numberFormatter.format(Math.abs(value));

  // If the value is negative, adjust the formatting
  if (value < 0) {
    if (currency) {
      formattedValue = formattedValue.replace(/^(\D+)/, "$1-");
    } else {
      formattedValue = `-${formattedValue}`;
    }
  }

  return formattedValue;
};
