function checkFormattingIsValid(str) {
  if (str === '') {
    return [0];
  }

  if (!str) {
    throw new Error('[ERROR]:빈 문자열입니다.');
  }

  const splitters = [':', ','];
  const parts = str.split(new RegExp(`[${splitters.join('')}]`));

  // 소수점 허용을 위해 숫자와 소수점을 처리하는 정규표현식
  const validNumber = /^\d+(\.\d+)?$/;

  if (parts.some(part => !validNumber.test(part))) {
    throw new Error(
      '[ERROR]:문자열에 포멧이 올바르지 않거나, 음수를 입력했습니다.',
    );
  }

  return parts;
}

export default function parseNormalInput(str) {
  const parts = checkFormattingIsValid(str);

  return parts.map(number => Number(number)).reduce((acc, curr) => acc + curr);
}
