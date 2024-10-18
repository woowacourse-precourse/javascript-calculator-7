const SEPERATOR_STRING = {
    START : '\/\/',
    END : '\\n'
}

const DEFAULT_SEPERATOR = [',', ':'];

const NUMBER_PATTERN = /[^0-9]/;

const SEPERATOR_SUBTITUTE = '@';

const NULL_STRING = '';

const ERROR_MESSAGE = {
    OTHER_CHARACTER : '[ERROR] 구분자, 숫자를 제외한 문자가 포함되어 있습니다.',
    INVALID_EXPRESSION: '[ERROR] 숫자와 구분자가 교차되는 형식이 아닙니다.',
    NULL_SEPERATOR: '[ERROR] 구분자가 입력되지 않았습니다.',
}

const EMPTY_INPUT_ARRAY = [0];

export {
    SEPERATOR_STRING,
    DEFAULT_SEPERATOR,
    NUMBER_PATTERN,
    SEPERATOR_SUBTITUTE,
    NULL_STRING,
    ERROR_MESSAGE,
    EMPTY_INPUT_ARRAY,
}