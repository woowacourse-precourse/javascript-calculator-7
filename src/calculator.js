export function calculator(input) {
    if (!input) return 0;
  
    const { customDelimiter, numbers } = parseInput(input);
    const delimiter = customDelimiter ? new RegExp(`[${customDelimiter},:]`) : /[,:]/;
    const splitNumbers = numbers.split(delimiter).map(Number);
  
    validateNumbers(splitNumbers);
  
    return splitNumbers.reduce((sum, num) => sum + num, 0);
  }
  
function parseInput(input) {
  const customDelimiterPattern = /^\/\/(.)\n/;
  const match = input.match(customDelimiterPattern);

  if (match) {
    const customDelimiter = match[1];
    const numbers = input.replace(customDelimiterPattern, '');
    return { customDelimiter, numbers };
  }

  return { customDelimiter: null, numbers: input };
}

function validateNumbers(numbers) {
  for (const num of numbers) {
    if (isNaN(num) || num < 0) {
      throw new Error('[ERROR] 음수는 허용되지 않습니다.');
    }
  }
}
