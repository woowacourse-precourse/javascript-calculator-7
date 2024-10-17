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

  // delimiterEnd를 찾는다. \n로 끝나는 것을 찾고, 2번째 인덱스(delimiter)를 추출한다.
  const delimiterEnd = input.indexOf('\\n');
  const delimiter = input.slice(2, delimiterEnd);

  // Check if delimiter is empty (i.e., delimiter not specified)
  if (delimiter === '') {
    throw new Error('[ERROR]:Delimiter를 입력받지 못했습니다.');
  }

  // escape 처리.
  const escapedDelimiter = escapeRegExp(delimiter);

  // 숫자들을 추출한다. +2를 플러스 해서 숫자 구하는 스트링 추출
  const content = input.slice(delimiterEnd + 2);

  // 1. ^[0-9] 정수부를 잡는다
  // 1.1. + 숫자가 하나 이상 반복 될수 있다.
  // 2. (\\.[0-9]+) 소수점이 나오는 숫자가 하나 이상 더 반복될수 있다.
  // 2.1. ? 이 소수점은 선택적이다.
  // 3 ${escapedDelimiter}[0-9]+(\\.[0-9]+)? delimiter+숫자+소수점으로 구성한다. 숫자는 하나 이상일수 있다.똑같이 소수점은 선택적이다.
  // 3.1 * 해당 패턴은 n회 이상 반복될수 있다.
  // 3.2 $ 문자열 끝을 의미한다. 이 패턴이 반복되고 또 다른 문자열이 반복되면 안된다.

  const validChars = new RegExp(
    `^[0-9]+(\\.[0-9]+)?(${escapedDelimiter}[0-9]+(\\.[0-9]+)?)*$`,
  ); // Allow valid decimal format and delimiter
  if (!validChars.test(content)) {
    throw new Error(
      '[ERROR]: delimiter와 숫자 이외의 문자가 입력 됬거나, 입력 순서가 잘못되었습니다!',
    );
  }

  // delimiter로 컨텐츠를 나눔.
  const parts = content.split(delimiter);

  // 중간에 '' 가 있다면 delimiter가 중복되어 입력되었다는 뜻. 이를 걸러냄.
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
