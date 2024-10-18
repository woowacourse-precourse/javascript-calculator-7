import { MissionUtils } from '@woowacourse/mission-utils';

// 숫자 파싱 함수
export function parseNumbers(input) {
  const delimiter = /,|:/; // 기본구분자

  // 커스텀 구분자 추출
  const customDelimiter = input.startsWith('//')
    ? input.substring(2, input.indexOf('\\n'))
    : null;
  // 커스텀 부분 제외한 문자열
  const processedInput = customDelimiter
    ? input.substring(input.indexOf('\\n') + 2)
    : input;

  // 커스텀 구분자로 나눈 문자 배열 (split 하면 배열로 만들어짐. )
  const splitByCustomDelimiter = customDelimiter
    ? processedInput.split(customDelimiter)
    : [processedInput];

  // 기본 구분자로 나눈 문자 배열
  const splitByDefaultDelimiters = splitByCustomDelimiter.flatMap((part) =>
    part.split(delimiter),
  );

  /// 예외처리 로직
  // validateInput(splitByDefaultDelimiters);

  // 빈 문자열이 있으면 '0'으로 대체
  const cleanedNumbers = splitByDefaultDelimiters.map((value) =>
    value === '' ? '0' : value,
  );
  MissionUtils.Console.print(input.indexOf('\\n'));

  MissionUtils.Console.print(customDelimiter);
  MissionUtils.Console.print(cleanedNumbers.map(Number));

  return cleanedNumbers.map(Number);
}
