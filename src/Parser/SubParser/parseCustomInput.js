function escapeRegExp(string) {
  // Escape special characters for use in a regular expression
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default function parseCustomInput(input) {
  // Ensure input is a string and remove quotes if present
  let str = Array.isArray(input) ? input[0] : input;
  str = str.replace(/^["']|["']$/g, '');

  // Check if the string starts with // and contains \n
  if (!str.startsWith('//') || !str.includes('\\n')) {
    throw new Error(
      '[ERROR]:포멧이 올바르지 않습니다. 반드시 //로 시작하고, \\n으로 끝나야 합니다.',
    );
  }

  // Extract the delimiter and the content
  const delimiterEnd = str.indexOf('\\n');
  const delimiter = str.slice(2, delimiterEnd); // Extract delimiter between // and \n

  // Check if delimiter is empty (i.e., delimiter not specified)
  if (delimiter === '') {
    throw new Error('[ERROR]:Delimiter를 입력받지 못했습니다.');
  }

  // Escape delimiter for use in regular expression
  const escapedDelimiter = escapeRegExp(delimiter);

  const content = str.slice(delimiterEnd + 2); // +2 to skip '\n'

  // Check if the content contains any character other than digits, valid decimal point, and the specified delimiter
  const validChars = new RegExp(
    `^[0-9]+(\\.[0-9]+)?(${escapedDelimiter}[0-9]+(\\.[0-9]+)?)*$`,
  ); // Allow valid decimal format and delimiter
  if (!validChars.test(content)) {
    throw new Error('[ERROR]: delimiter와 숫자 이외의 문자가 입력 됬습니다!');
  }

  // Split the content using the delimiter
  const parts = content.split(new RegExp(escapedDelimiter));

  // Check for empty entries (which occur when delimiters are consecutive)
  if (parts.some(part => part === '')) {
    throw new Error(
      '[ERROR]: delimiter가 숫자 사이에 중복되어 입력되었습니다.',
    );
  }

  // Convert parts to numbers and sum
  return parts
    .map(n => parseFloat(n)) // Use parseFloat to handle decimal numbers
    .reduce((acc, curr) => acc + curr, 0);
}

// customInput testCases
