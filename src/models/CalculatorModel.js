// 최대 허용 숫자 크기 설정
const MAX_LIMIT = Number.MAX_SAFE_INTEGER;

// --- 에러 메시지 상수 ---
const ERROR_MESSAGES = {
  INVALID_CHARACTER: '구분자가 아닌 문자는 입력할 수 없습니다.',
  NON_POSITIVE_NUMBER: '양수가 아닌 숫자는 입력할 수 없습니다.',
  INVALID_CHARACTER_AND_NON_POSITIVE_NUMBER:
    '구분자가 아닌 문자와 양수가 아닌 숫자는 입력할 수 없습니다.',
  NUMBER_TOO_LARGE: `입력한 숫자가 너무 큽니다. 더 작은 숫자를 입력해 주세요.`,
};

const DEFAULT_DELIMITER = /,|:/;

// --- 에러 처리 함수 ---
export function throwError(errorCode) {
  throw new Error(`[ERROR] : ${ERROR_MESSAGES[errorCode]}`);
}

function isNonNumeric(value) {
  // 빈문자열은 0으로 대체해야 하기 때문에 제외함.
  return value !== '' && !/^-?\d+$/.test(value);
}

function isZero(value) {
  return /^0+$/.test(value);
}

function isNegative(value) {
  return Number(value) < 0;
}

// --- 입력 검증  ---
function validateTooLarge(input) {
  const hasTooLarge = input.some((char) => Number(char) > MAX_LIMIT);
  if (hasTooLarge) throwError('NUMBER_TOO_LARGE');
}

function validateNonNumericAndNegative(input) {
  const hasNonNumeric = input.some((char) => isNonNumeric(char));
  const hasNegative = input.some((char) => isNegative(char));
  if (hasNonNumeric && hasNegative) {
    throwError('INVALID_CHARACTER_AND_NON_POSITIVE_NUMBER');
  }
}

function validateNonNumericAndZero(input) {
  const hasNonNumeric = input.some((char) => isNonNumeric(char));
  const hasZero = input.some((char) => isZero(char));
  if (hasNonNumeric && hasZero) {
    throwError('INVALID_CHARACTER_AND_NON_POSITIVE_NUMBER');
  }
}

function validateNegativeOrZero(input) {
  const hasNegative = input.some((char) => isNegative(char));
  const hasZero = input.some((char) => isZero(char));
  if (hasNegative || hasZero) {
    throwError('NON_POSITIVE_NUMBER');
  }
}

function validateNonNumeric(input) {
  const hasNonNumeric = input.some((char) => isNonNumeric(char));
  if (hasNonNumeric) {
    throwError('INVALID_CHARACTER');
  }
}

function validateInput(input) {
  validateTooLarge(input);
  validateNonNumericAndNegative(input);
  validateNonNumericAndZero(input);
  validateNegativeOrZero(input);
  validateNonNumeric(input);
}

// --- 구분자 추출 ---
function getCustomDelimiter(input) {
  const hasCustomDelimiter = input.startsWith('//');
  if (!hasCustomDelimiter) return null;

  const delimiterEndIndex = input.indexOf('\\n');

  return input.substring(2, delimiterEndIndex); // '//' 다음 문자부터 '\\n' 전까지의 문자 추출
}

// --- 커스텀구분자 입력 부분 제외 ---
function removeDelimiterSection(customDelimiter, input) {
  if (!customDelimiter) {
    return input;
  }
  const delimiterEndIndex = input.indexOf('\\n');
  return input.substring(delimiterEndIndex + 2); // '\\n' 다음 부분부터 끝까지 추출
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
