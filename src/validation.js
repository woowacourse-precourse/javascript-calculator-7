/** @format */

export function failNumberRange(input) {
  return input.some((number) => Number(number) < 0);
}
