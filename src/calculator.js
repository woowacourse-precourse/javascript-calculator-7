export function calculator(input) {
  if (!input) return 0;

  const { customDelimiter, numbers } = parseInput(input);
  const delimiter = customDelimiter ? new RegExp(`[${escapeRegExp(customDelimiter)},:]`) : /[,:]/;
  const splitNumbers = numbers.split(delimiter).map(Number);

  validateNumbers(splitNumbers);

  return splitNumbers.reduce((sum, num) => sum + num, 0);
}

function parseInput(input) {
  const customDelimiterPattern = /^\/\/(.)\\n/;
  const match = input.match(customDelimiterPattern);

  if (match) {
    const customDelimiter = match[1];
    const numbers = input.replace(customDelimiterPattern, '');
    return { customDelimiter, numbers };
  }

  return { customDelimiter: null, numbers: input };
}

function validateNumbers(numbers) {
  const negativeNumbers = numbers.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`[ERROR] 음수는 허용되지 않습니다: ${negativeNumbers.join(', ')}`);
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
}
