function escapeRegExp(string) {
  // 정규식에 사용되는 모든 예약어들을 escape 처리한다. .*[]\ 등...
  // 원본 문자를 남기고 ($&), 그 문자에 \를 더 붙인다.
  // "Hello. How+are|you?" =>
  // "Hello\. How\+are\|you\?"

  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default function parseCustomInput(input) {
  // Ensure input is a string and remove quotes if present
  // let input = Array.isArray(input) ? input[0] : input;
  // str = str.replace(/^["']|["']$/g, '');

  // Check if the string starts with // and contains \n
  if (!input.startsWith('//') || !input.includes('\\n')) {
    throw new Error(
      '[ERROR]:포멧이 올바르지 않습니다. 반드시 //로 시작하고, \\n으로 끝나야 합니다.',
    );
  }

  // Extract the delimiter and the content
  const delimiterEnd = input.indexOf('\\n');
  const delimiter = input.slice(2, delimiterEnd); // Extract delimiter between // and \n

  // Check if delimiter is empty (i.e., delimiter not specified)
  if (delimiter === '') {
    throw new Error('[ERROR]:Delimiter를 입력받지 못했습니다.');
  }

  // Escape delimiter for use in regular expression
  const escapedDelimiter = escapeRegExp(delimiter);

  const content = input.slice(delimiterEnd + 2); // +2 to skip '\n'

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
