export const ERROR_MESSAGES = {
    UNDEFINED_EXPRESSION: '[ERROR] 정의되지 않은 수식입니다.',
    CUSTOM_DELIMITER_CANNOT_BE_NUMBER: '[ERROR] 커스텀 구분자는 숫자가 될 수 없습니다.',
    CUSTOM_DELIMITER_MUST_BE_ONE_CHARACTER: '[ERROR] 커스텀 구분자로는 한 글자의 문자만 지정할 수 있습니다.',
    CUSTOM_DELIMITER_MUST_BE_DEFINED_AT_THE_BEGINNING: '[ERROR] 커스텀 구분자는 문자열 맨 앞에서만 지정할 수 있습니다.',
    CUSTOM_DELIMITER_MUST_BE_DEFINED_AT_THE_BEGINNING_AND_ONE_CHARACTER: '[ERROR] 커스텀 구분자는 문자열 맨 앞에서만 지정할 수 있으며, 문자 하나만 지정 가능합니다.',
    ERROR_MISSING_CUSTOM_DELIMITER_START: '[ERROR] 커스텀 구분자를 지정하고 싶으시다면, 문자열 맨 앞에서 //과 함께 지정해주세요.',
    ERROR_MISSING_CUSTOM_DELIMITER_END: '[ERROR] 커스텀 구분자를 지정하고 싶으시다면, 문자열 맨 앞에서 \\n과 함께 지정해주세요.',
    NON_NUMBERIC_VALUE: '[ERROR] 숫자가 아닌 값이 포함되어 있습니다.',
    NEGATIVE_NUMBER_NOT_ALLOWED: '[ERROR] 모든 숫자는 양수여야 합니다.'
}

export const INPUT_PROMPTS = {
    USER_INPUT_PROMPT: '덧셈할 문자열을 입력해 주세요.\n',
};

export const DELIMITER_CONSTANTS = {
    CUSTOM_DELIMITER_START: '//',
    CUSTOM_DELIMITER_END: '\\n',
};

export const DEFAULT_DELIMITERS = [',', ':'];