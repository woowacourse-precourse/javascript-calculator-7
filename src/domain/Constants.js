export const ErrorMessage = Object.freeze({
    NEGATIVE_NUMBER: '[ERROR] 음수는 허용되지 않습니다.',
    INVALID_NUMBER: '[ERROR] 유효하지 않은 숫자입니다.',
    INVALID_CHARACTER: '[ERROR] 유효하지 않은 문자입니다.',
    WHITESPACE: '[ERROR] 숫자 사이에 공백이 있습니다.'
});

export const GuideMessage = Object.freeze({
    START_CALCULATION: '덧셈할 문자열을 입력해 주세요.\n',
    RESULT: '결과 : ',
});

export const Delimiter = Object.freeze({
    DEFAULT: [',', ':'],
    CUSTOM_PREFIX: '//',
    CUSTOM_SUFFIX: '\\n',
});

export const StaticNumber = Object.freeze({
    INITIAL_SUM: 0,
    RADIX: 10,
});