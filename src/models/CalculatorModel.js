// --- 에러 메시지 상수 ---
const ERROR_MESSAGES = {
  INVALID_CHARACTTER: '[ERROR] : 구분자가 아닌 문자는 입력할 수 없습니다.',
  ZERO_NOT_ALLOWED: '[ERROR] : 0은 입력할 수 없습니다.',
};

// --- 에러 처리 함수 ---
export function throwError(code) {
  throw new Error(ERROR_MESSAGES[code]);
}

// --- 예외처리 함수 ---
// 양수가 아닌 수가 입력되거나, 구분자가 아닌 문자가 입력 된 경우
export function checkForErrors(input) {
  const hasNonNumeric = input.map(Number).some((char) => !/^\d+$/.test(char));
  const hasZero = input.some((char) => /^0+$/.test(char));

  if (hasNonNumeric) throwError('INVALID_CHARACTTER');
  if (hasZero) throwError('ZERO_NOT_ALLOWED');
}

// --- 구분자 추출 함수 ---
export function extractDelimiter(input) {
  return input.startsWith('//')
    ? input.substring(2, input.indexOf('\\n'))
    : null;
}

// --- 커스텀구분자 입력 부분 제외 ---
export function removeDelimiterSection(customDelimiter, input) {
  return customDelimiter ? input.substring(input.indexOf('\\n') + 2) : input;
}

// --- 문자열을 구분자 기준으로 나누기 ---
export function splitString(customDelimiter, processedInput, defaultDelimiter) {
  // 커스텀 문자로 나누기
  const splitByCustomDelimiter = customDelimiter
    ? processedInput.split(customDelimiter)
    : [processedInput];

  // 기본 구분자로 나누기
  const splitByDefaultDelimiters = splitByCustomDelimiter.flatMap((part) =>
    part.split(defaultDelimiter),
  );

  return splitByDefaultDelimiters;
}

// --- 빈 문자열은 0 반환 ---
export function cleanAndConvertToNumbers(inputArr) {
  const cleanedNumbers = inputArr.map((value) => (value === '' ? '0' : value));
  return cleanedNumbers.map(Number);
}

// --- 숫자 파싱 로직 ---
export function parseNumbers(input) {
  const dafaultDelimiter = /,|:/; // 기본구분자
  const customDelimiter = extractDelimiter(input); // 커스터 구분자 추출
  const processedInput = removeDelimiterSection(customDelimiter, input); // 커스텀 부분 제외한 문자열

  // 구분자로 문자열 나누기
  const splitByDelimiters = splitString(
    customDelimiter,
    processedInput,
    dafaultDelimiter,
  );

  checkForErrors(splitByDelimiters);

  // 빈 문자열이 있으면 '0'으로 대체
  return cleanAndConvertToNumbers(splitByDelimiters);
}

// --- 계산 ---
export function calculate(input) {
  const numArr = parseNumbers(input);
  const sum = numArr.reduce((acc, current) => acc + current, 0); // 배열의 합 계산
  return sum;
}
