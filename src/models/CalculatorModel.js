// --- 에러 메시지 상수 ---
const ERROR_MESSAGES = {
  INVALID_CHARACTER: '구분자가 아닌 문자',
  NON_POSITIVE_NUMBER: '양수가 아닌 숫자',
  INVALID_CHARACTER_AND_NON_POSITIVE_NUMBER:
    '구분자가 아닌 문자와 양수가 아닌 숫자',
};

const DEFAULT_DELIMITER = /,|:/;

// --- 에러 처리 함수 ---
export function throwError(errorCode) {
  throw new Error(
    `[ERROR] : ${ERROR_MESSAGES[errorCode]}는 입력할 수 없습니다.`,
  );
}

// 문자 포함 검증
function isNonNumeric(value) {
  return !/^-?\d+$/.test(value);
}

// 0 포함 검증
function isZero(value) {
  return /^0+$/.test(value);
}

// 음수 포함 검증
function isNegative(value) {
  return Number(value) < 0;
}

// --- 입력 값 검증 함수 ---
function validateInput(input) {
  const hasNonNumeric = input.map(Number).some((char) => isNonNumeric(char));
  const hasZero = input.some((char) => isZero(char));
  const hasNegative = input.some((char) => isNegative(char));
  // 문자와 0 또는 음수가 동시에 입력된 경우

  // 잘못된 구분자와 0,음수 입력 에러
  if (hasNonNumeric && (hasZero || hasNegative)) {
    throwError('INVALID_CHARACTER_AND_NON_POSITIVE_NUMBER');
  }
  // 0이나 음수 입력
  else if (hasNegative || hasZero) {
    throwError('NON_POSITIVE_NUMBER');
  }
  // 잘못된 구분자 입력
  else if (hasNonNumeric) {
    throwError('INVALID_CHARACTER');
  }
}

// --- 구분자 추출 ---
function getCustomDelimiter(input) {
  const hasCustomDelimiter = input.startsWith('//');
  if (!hasCustomDelimiter) return null;

  const delimiterEndIndex = input.indexOf('\\n');
  return input.substring(2, delimiterEndIndex);
}

// --- 커스텀구분자 입력 부분 제외 ---
function removeDelimiterSection(customDelimiter, input) {
  if (!customDelimiter) {
    return input; // 커스텀 구분자가 없을 경우 원래 입력 반환.
  }

  const delimiterEndIndex = input.indexOf('\\n');
  return input.substring(delimiterEndIndex + 2);
}

// --- 문자열을 구분자 기준으로 나누기 ---
function splitString(customDelimiter, processedInput) {
  const splitByCustomDelimiter = customDelimiter
    ? processedInput.split(customDelimiter)
    : [processedInput];

  const splitByDefaultDelimiters = splitByCustomDelimiter.flatMap((part) =>
    part.split(DEFAULT_DELIMITER),
  );

  return splitByDefaultDelimiters;
}

// --- 빈 문자열은 0 반환 ---
function replaceEmptyWithZero(inputArr) {
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
