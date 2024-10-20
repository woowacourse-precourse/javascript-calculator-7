//숫자만 포함하는지 확인하는 정규표현식

export const NUMBER_PATTERN = /^\d+$/;

//커스텀 구분자 패턴을 확인하는 정규표현식

export const CUSTOM_DELIMITER_PATTERN = /^\/\/([^\\n]*)\\n(.*)$/;

// 기본 구분자 패턴 (쉼표 또는 콜론)

export const DEFAULT_DELIMITER_PATTERN = /[,:]/;

//구분자에 숫자가 포함되어 있는지 확인하는 정규표현식

export const DELIMITER_WITH_NUMBER_PATTERN = /\d/;
