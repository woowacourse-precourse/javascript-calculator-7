const ERROR_PREFIX = '[ERROR]';

function formatErrorMessage(message) {
  return `${ERROR_PREFIX} ${message}`;
}

export const ERROR_MESSAGES = {
  NON_NUMERIC_VALUE: (value) => formatErrorMessage(`숫자가 아닌 값이 포함되어 있습니다: ${value}`),
  NEGATIVE_NUMBER: (negativeNumbers) => formatErrorMessage(`음수는 허용되지 않습니다: ${negativeNumbers.join(', ')}`),
};