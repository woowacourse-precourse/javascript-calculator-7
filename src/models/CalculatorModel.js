// --- 에러 메시지 상수 ---
const ERROR_MESSAGES = {
  INVALID_CHARACTTER: '[ERROR] : 구분자가 아닌 문자는 입력할 수 없습니다.',
  ZERO_NOT_ALLOWED: '[ERROR] : 0은 입력할 수 없습니다.',
};

const DEFAULT_DELIMITER = /,|:/;

// --- 에러 처리 함수 ---
export function throwError(errorCode) {
  throw new Error(ERROR_MESSAGES[errorCode]);
}

// 문자 포함 검증
function isNonNumeric(value) {
  return !/^\d+$/.test(value);
}

// 0 포함 검증
function isZero(value) {
  return /^0+$/.test(value);
}

// --- 입력 값 검증 함수 ---
export function validateInput(input) {
  const hasNonNumeric = input.map(Number).some((char) => isNonNumeric(char));
  const hasZero = input.some((char) => isZero(char));

  if (hasNonNumeric) throwError('INVALID_CHARACTTER');
  if (hasZero) throwError('ZERO_NOT_ALLOWED');
}

// --- 구분자 추출 ---
export function getCustomDelimiter(input) {
  const hasCustomDelimiter = input.startsWith('//');
  if (!hasCustomDelimiter) return null;

  const delimiterEndIndex = input.indexOf('\\n');
  return input.substring(2, delimiterEndIndex);
}

// --- 커스텀구분자 입력 부분 제외 ---
export function removeDelimiterSection(customDelimiter, input) {
  if (!customDelimiter) {
    return input; // 커스텀 구분자가 없을 경우 원래 입력 반환.
  }

  const delimiterEndIndex = input.indexOf('\\n');
  return input.substring(delimiterEndIndex + 2);
}

// --- 문자열을 구분자 기준으로 나누기 ---
export function splitString(customDelimiter, processedInput) {
  const splitByCustomDelimiter = customDelimiter
    ? processedInput.split(customDelimiter)
    : [processedInput];

  const splitByDefaultDelimiters = splitByCustomDelimiter.flatMap((part) =>
    part.split(DEFAULT_DELIMITER),
  );

  return splitByDefaultDelimiters;
}

// --- 빈 문자열은 0 반환 ---
export function replaceEmptyWithZero(inputArr) {
  const cleanedNumbers = inputArr.map((value) => (value === '' ? '0' : value));
  return cleanedNumbers.map(Number);
}

// --- 숫자 파싱 로직 ---
export function parseNumbers(input) {
  const customDelimiter = getCustomDelimiter(input);
  const processedInput = removeDelimiterSection(customDelimiter, input);

  const splitByDelimiters = splitString(customDelimiter, processedInput);

  validateInput(splitByDelimiters);

  return replaceEmptyWithZero(splitByDelimiters);
}

// --- 계산 ---
export function calculate(input) {
  const numArr = parseNumbers(input);
  return numArr.reduce((sum, num) => sum + num, 0);
}
