export const TEXT_MESSAGE = Object.freeze({
    INPUT_TEXT: '덧셈할 문자열을 입력해 주세요.\n',
    OUTPUT_TEXT: '결과 :',
});

export const ERROR_MESSAGE = Object.freeze({
    ERROR_NUM: '[ERROR] 음수는 허용되지 않습니다. 양수만 입력해 주세요.',
    ERROR_STR: '[ERROR] 잘못된 입력입니다. 숫자와 구분자만 포함된 문자열을 입력해 주세요.',
    ERROR_SEPERATOR: '[ERROR] 숫자 없이 구분자만 입력되었습니다. 숫자를 함께 입력해 주세요.',
    ERROR_BASIC_SEPARATOR:
        '[ERROR] 쉼표(,) 또는 콜론(:) 이외의 구분자는 사용 불가합니다. 커스텀 구분자를 지정해 주세요.',
    ERROR_CUSTOM_SEPARATOR:
        '[ERROR] 커스텀 구분자 형식이 올바르지 않습니다. "//"와 "\\n" 사이에 구분자를 지정해 주세요.',
});
