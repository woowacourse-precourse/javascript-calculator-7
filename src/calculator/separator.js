// 문자열의 시작이 '/'인지 확인하여 커스텀 구분자 사용 여부를 반환하는 함수
export const hasCustomSeparator = (inputString) => {
  // 문자열의 시작이 '/'인지 확인하는 정규 표현식
  const pattern = /^\//;

  if (pattern.test(inputString)) {
    return true;
  }

  return false;
};

// 입력된 문자열에서 커스텀 구분자를 추출하고 구분자와 남은 문자열을 반환하는 함수
export const setCustomSeparator = (inputString) => {
  const separators = new Set([',', ':']);

  // '//'로 시작하고 '\n'으로 끝나는 부분을 추출하는 정규 표현식
  const customSeparatorPattern = /^\/\/(.+?)\\n/;
  const isCustomSeparatorMatch = customSeparatorPattern.exec(inputString);

  if (!isCustomSeparatorMatch) {
    throw new Error(
      '[ERROR] 커스텀 구분자 지정 형식에 맞지 않거나 커스텀 구분자가 작성되지 않았습니다.'
    );
  }

  const customSeparator = isCustomSeparatorMatch[1];

  if (customSeparator.length > 1) {
    throw new Error('[ERROR] 커스텀 구분자는 단일 문자를 사용해야합니다.');
  }

  if (customSeparator) {
    separators.add(customSeparator);
  }

  // 커스텀 구분자 제거 후 남은 문자열 추출
  const remainingStringPattern = /\\n([^]*)$/;
  const isRemainingStringMatch = remainingStringPattern.exec(inputString);

  // 남은 문자열이 없을 경우 빈 문자열 반환
  const remainingString = isRemainingStringMatch
    ? isRemainingStringMatch[1]
    : '';

  return { separators, remainingString };
};

// 주어진 구분자를 사용하여 문자열을 분리하고 숫자로 변환하는 함수
export const splitBySeparators = (separators, calculationString) => {
  // 구분자를 모아 정규표현식 패턴으로 변환
  let splitPattern = '';
  separators.forEach((separator) => {
    splitPattern += separator;
  });

  // 구분자로 문자열 분리
  const calculationArr = calculationString.split(
    new RegExp(`[${splitPattern}]`)
  );

  // 배열의 각 요소를 숫자로 변환하고 유효성 검사 후 반환
  return calculationArr.map((element) => {
    const num = Number(element);

    if (isNaN(num)) {
      throw new Error('[ERROR] 입력 문자열에 유효하지 않은 구분자가 있습니다.');
    }

    if (num < 0) {
      throw new Error('[ERROR] 입력 문자열에 음수가 있습니다.');
    }

    return num;
  });
};
