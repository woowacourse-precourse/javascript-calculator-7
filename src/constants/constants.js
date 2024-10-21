export const INPUT_MESSAGE = "덧셈할 문자열을 입력해 주세요.\n"
export const OUTPUT_MESSAGE_TEMPLATE = "결과 : ";

export const OUTPUT_MESSAGE = (result) => `${OUTPUT_MESSAGE_TEMPLATE}${result}`;

const ERROR_PREFIX = "[ERROR]";
export const ERROR_MESSAGE = {
    invalidInputError : `${ERROR_PREFIX} 유효한 정수 값을 입력해야 합니다.`,
    negativeInputError : `${ERROR_PREFIX} 음수값은 허용되지 않습니다.`,
    separatorError : `${ERROR_PREFIX} 구분자가 맞지 않습니다.`,
}