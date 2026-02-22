/**
 * Format a number as currency (USD by default)
 * @param {number} amount
 * @param {string} currency
 * @param {string} locale
 * @returns {string}
 */
export function formatCurrency(amount, currency = "USD", locale = "en-US") {
  if (isNaN(amount) || amount === null || amount === undefined) return "$0.00";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format a number with commas
 * @param {number} num
 * @returns {string}
 */
export function formatNumber(num) {
  if (isNaN(num)) return "0";
  return new Intl.NumberFormat("en-US").format(num);
}
