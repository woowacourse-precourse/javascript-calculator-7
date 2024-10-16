function escapeRegExp(string) {
  // Escape special characters for use in a regular expression
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function parseCustomInput(input) {
  // Ensure input is a string and remove quotes if present
  let str = Array.isArray(input) ? input[0] : input;
  str = str.replace(/^["']|["']$/g, '');

  // Check if the string starts with // and contains \n
  if (!str.startsWith('//') || !str.includes('\\n')) {
    throw new Error('Invalid input format: Must start with // and contain \\n');
  }

  // Extract the delimiter and the content
  const delimiterEnd = str.indexOf('\\n');
  const delimiter = str.slice(2, delimiterEnd); // Extract delimiter between // and \n

  // Check if delimiter is empty (i.e., delimiter not specified)
  if (delimiter === '') {
    throw new Error('Delimiter not specified');
  }

  // Escape delimiter for use in regular expression
  const escapedDelimiter = escapeRegExp(delimiter);

  const content = str.slice(delimiterEnd + 2); // +2 to skip '\n'

  // Check if the content contains any character other than digits, valid decimal point, and the specified delimiter
  const validChars = new RegExp(
    `^[0-9]+(\\.[0-9]+)?(${escapedDelimiter}[0-9]+(\\.[0-9]+)?)*$`,
  ); // Allow valid decimal format and delimiter
  if (!validChars.test(content)) {
    throw new Error('Content contains invalid characters');
  }

  // Split the content using the delimiter
  const parts = content.split(new RegExp(escapedDelimiter));

  // Check for empty entries (which occur when delimiters are consecutive)
  if (parts.some(part => part === '')) {
    throw new Error('Invalid input: Empty value detected between delimiters');
  }

  // Convert parts to numbers and sum
  return parts
    .map(n => parseFloat(n)) // Use parseFloat to handle decimal numbers
    .reduce((acc, curr) => acc + curr, 0);
}

// Test cases
// Test cases
// Test cases
const testCases = [
  ['//;\\n1;2;3;4', 10, "구분자 ';'로 분리된 정수들의 합"],
  ['//:\\n1:2:3:4', 10, "구분자 ':'로 분리된 정수들의 합"],
  ['//|\\n1|2|3|4', 10, "구분자 '|'로 분리된 정수들의 합"],
  ['//-\\n1-2-3-4', 10, "구분자 '-'로 분리된 정수들의 합"],
  ['//;\\n1.5;2.5;3;4', 11, "구분자 ';'와 소수점 숫자가 포함된 합"],
  ['//:\\n1.25:2.75:3:4', 11, "구분자 ':'와 소수점 숫자가 포함된 합"],
  ['//|\\n1.1|2.2|3.3|4', 10.6, "구분자 '|'와 소수점 숫자가 포함된 합"],
  ['//;\\n1;2.5;3;4....', 'Error', '잘못된 입력: 연속된 소수점이 있는 경우'],
  ['//|\\n1||2', 'Error', '잘못된 입력: 구분자가 연속으로 있는 경우'],
  ['//,\\n1,2.5,3..75', 'Error', '잘못된 입력: 숫자 중간에 잘못된 소수점 포함'],
  ['//@\\n1@2@abc', 'Error', '잘못된 입력: 숫자가 아닌 문자가 포함된 경우'],
  ['//***\\n1***2***3***4', 10, "구분자 '***'로 분리된 정수들의 합"],
  ['//-\\n1-2-3-4', 10, "구분자 '-'로 분리된 정수들의 합"],
  ['//###\\n1###2.2###3###4', 10.2, "구분자 '###'와 소수점이 포함된 합"],
  ['//^\\n1^2^3.5^4', 10.5, "구분자 '^'와 소수점이 포함된 합"],
  ['//;\\n0;0.5;1;2', 3.5, '0과 소수점이 포함된 입력'],
  ['//:\\n1:-2:3:4', 6, '음수와 양수가 혼합된 입력'],
  ['//|\\n1.1|-2.2|3.3|4.4', 6.6, '소수와 음수가 포함된 입력'],
  ['//;\\n1;1000;1001;2', 2004, ''],
  ['//-\\n1-1000-1001-3', 2005, ''],
  ['//;\\n', 'Error', '구분자가 있지만 내용이 없는 경우'],
  ['//:\\n', 'Error', '구분자가 있지만 내용이 없는 경우'],
  ['//-\\n1-', 'Error', '구분자가 있지만 마지막 값이 빈 경우'],
  ['//|\\n1|2|', 'Error', '마지막 구분자 이후에 값이 없는 경우'],
  ['//\\n1,2,3', 'Error', '구분자가 명시되지 않은 경우'],
];

testCases.forEach((testCase, index) => {
  const [input, expected, description] = testCase;
  console.log(`테스트 케이스 ${index + 1}: ${description}`);
  try {
    const result = parseCustomInput(input);
    if (expected === 'Error') {
      console.error('  실패: 에러가 발생해야 하지만, 발생하지 않았습니다.');
    } else if (result === expected) {
      console.log(`  성공: 결과는 ${result}입니다.`);
    } else {
      console.error(`  실패: 예상 결과 ${expected}, 실제 결과 ${result}`);
    }
  } catch (error) {
    if (expected === 'Error') {
      console.log('  성공: 예상된 에러가 발생했습니다.');
    } else {
      console.error(
        `  실패: 예상된 에러가 아닌 '${error.message}' 에러가 발생했습니다.`,
      );
    }
  }
  console.log('---');
});
