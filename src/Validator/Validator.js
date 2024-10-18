import { buildCustomInputValidationRegex } from '../Util/regex.js';

function validateInputFormat(input) {
  // 입력이 //로 시작하고 \n을 포함하는지 확인
  if (!input.startsWith('//') || !input.includes('\\n')) {
    throw new Error(
      '[ERROR]: 입력은 반드시 "//"로 시작하고, "\\n"이 포함되어야 합니다.',
    );
  }
}

function validateCustomInput(content, escapedDelimiter) {
  // 숫자와 delimiter로 이루어진 패턴을 확인한다.
  const validChars = buildCustomInputValidationRegex(escapedDelimiter);
  // 정규식이 맞지 않으면 에러를 던진다.
  if (!validChars.test(content)) {
    throw new Error(
      '[ERROR]: delimiter와 숫자 이외의 문자가 포함되었거나, 입력 순서가 잘못되었습니다.',
    );
  }
}
function validateNormalInput(parts) {
  const validNumber = /^\d+(\.\d+)?$/;

  if (parts.some(part => !validNumber.test(part))) {
    throw new Error(
      '[ERROR]:문자열에 포멧이 올바르지 않거나, 음수를 입력했습니다.',
    );
  }
}

function validateNoDuplicateDelimiters(parts) {
  // 중간에 빈 문자열이 있는지 확인하여 delimiter 중복을 검사한다.
  if (parts.some(part => part === '')) {
    throw new Error('[ERROR]: 숫자 사이에 중복된 delimiter가 있습니다.');
  }
}

export {
  validateCustomInput,
  validateNormalInput,
  validateNoDuplicateDelimiters,
  validateInputFormat,
};
