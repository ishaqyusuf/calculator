export function formatNumber(
  value: string | number,
  currency: any = undefined
) {
  if (!value) return value;
  if (typeof value === "string") value = Number(value);
  return new Intl.NumberFormat("en-US", {
    currency,
    minimumFractionDigits: 0,
    style: currency ? "currency" : undefined,
  }).format(value);
}
