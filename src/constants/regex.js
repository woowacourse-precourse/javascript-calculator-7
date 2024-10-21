/**
 * 문자열 구분자를 위한 정규 표현식 객체입니다.
 * - DEFAULT: 기본 구분자로 콤마(,)와 콜론(:)을 매칭합니다. (전역 검색 플래그 g 사용)
 * - CUSTOM: 커스텀 구분자를 매칭하는 정규식입니다. (전역 검색 플래그 g 미사용)
 * @constant {Object} DELIMITER_REGEX
 * @property {RegExp} DEFAULT - 콤마(,)와 콜론(:)을 전역 검색하는 정규식입니다.
 * @property {RegExp} CUSTOM - 커스텀 구분자를 매칭하는 정규식입니다.
 */
export const DELIMITER_REGEX = Object.freeze({
  DEFAULT: /,|:/g,
  CUSTOM: /^\/\/([\s\S]*?)\\n/,
});

/**
 * 문자열에서 특정 패턴을 매칭하기 위한 정규 표현식 객체입니다.
 * - SPACE: 공백 문자(띄어쓰기)를 매칭합니다.
 * - META_CHARACTERS: 정규식에서 메타 문자를 매칭하기 위한 정규식입니다.
 * @constant {Object} REGEX_PATTERNS
 * @property {RegExp} SPACE - 공백 문자를 전역 검색하는 정규식입니다.
 * @property {RegExp} META_CHARACTERS - 메타 문자를 전역 검색하는 정규식입니다.
 */
export const REGEX_PATTERNS = Object.freeze({
  SPACE: /\s/,
  META_CHARACTERS: /[-\/\\^$*+?.()|[\]{}]/g,
});
