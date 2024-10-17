/** @format */

export function failIsNumbers(input) {
  return input.some((number) => isNaN(parseInt(number)));
}

export function failVaildSeparator(input) {
  return input.some((number) => Number.isNaN(Number(number)));
}

export function failNumberRange(input) {
  return input.some((number) => Number(number) < 0);
}
