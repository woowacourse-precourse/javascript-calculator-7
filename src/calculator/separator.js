/**
 * 입력된 문자열에 커스텀 구분자를 지정하는지 확인하는 함수
 * @param {string} inputString - 검사할 입력 문자열
 * @returns {boolean} 커스텀 구분자를 지정하는 문자열이 포함하면 true, 그렇지 않으면 false
 */
export const hasCustomSeparator = (inputString) => {
  // 문자열의 시작이 '/'인지 확인하는 정규 표현식
  const pattern = /^\//;

  // 정규 표현식이 일치하면 true 반환
  if (pattern.test(inputString)) {
    return true;
  }

  // 정규 표현식이 일치하지 않으면 false 반환
  return false;
};

/**
 * 입력된 문자열에서 커스텀 구분자를 추출하고 구분자 집합과 계산할 문자열을 반환하는 함수
 *
 * @param {string} inputString - 사용자로부터 입력받은 문자열
 * @returns {{ separators: Set<string>, remainingString: string }} 구분자 집합과 구분자 제거 후 문자열을 반환
 * @throws {Error} 구분자 형식이 맞지 않는 경우 에러를 던짐
 */
export const setCustomSeparator = (inputString) => {
  const separators = new Set([',', ':']);

  // '//'로 시작하고 '\n'으로 끝나는 부분을 추출하는 정규 표현식
  const customSeparatorPattern = /^\/\/(.+?)\\n/;
  const isCustomSeparatorMatch = customSeparatorPattern.exec(inputString);

  if (!isCustomSeparatorMatch) {
    throw new Error(
      '커스텀 구분자 지정 형식에 맞지 않거나 커스텀 구분자가 작성되지 않았습니다.'
    );
  }

  const customSeparator = isCustomSeparatorMatch[1];

  if (customSeparator.length > 1) {
    throw new Error('커스텀 구분자는 단일 문자를 사용해야합니다.');
  }

  if (customSeparator) {
    separators.add(customSeparator);
  }

  // 커스텀 구분자 제거 후 남은 문자열 추출
  const remainingStringPattern = /\\n([^]*)$/;
  const isRemainingStringMatch = remainingStringPattern.exec(inputString);

  // 남은 문자열이 없을 경우 빈 문자열 반환
  const remainingString = isRemainingStringMatch ? isRemainingStringMatch[1] : '';

  return { separators, remainingString };
};
