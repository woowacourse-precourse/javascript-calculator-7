import { Console } from '@woowacourse/mission-utils';

class App {
  // 정규식에서 메타 문자를 이스케이프 처리하는 함수
  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  calculator(numbers) {
    // 예외 사항1: 빈 문자열 처리
    if (numbers === '') return 0;

    //기본 구분자: 쉼표, 콜론
    let delimiter = /,|:/;

    // 커스텀 구분자가 있는지 확인
    if (numbers.startsWith('//')) {
      // 커스텀 구분자 추출
      const endIndex = numbers.indexOf('\\n');
      if (endIndex == -1) {
        throw new Error(
          '[ERROR] 커스텀 구분자는 "//"와 "\\n" 사이에 위치해야합니다.'
        );
      }

      let customDelimiter = numbers.slice(2, endIndex);

      // 커스텀 구분자를 정규식으로 사용할 때 메타 문자 이스케이프
      customDelimiter = this.escapeRegExp(customDelimiter);

      delimiter = new RegExp(`${delimiter.source}|${customDelimiter}`);

      numbers = numbers.slice(endIndex + 2);
    }

    // 구분자에 따른 숫자 추출
    const numberArray = numbers.split(delimiter);

    // 예외 2: 숫자가 아닌 값 포함 확인
    numberArray.forEach((num) => {
      if (isNaN(num)) {
        throw new Error(`[ERROR] 잘못된 값이 포함되어 있습니다.`);
      }
    });
  }
  async run() {
    try {
      // 사용자 입력
      const input = await Console.readLineAsync(
        '구분자와 양수로 구성된 문자열을 입력해주세요: '
      );
      // 계산 결과
      const result = this.calculator(input);

      // 결과 출력
      Console.print(`결과: ${result}`);
    } catch (e) {
      Console.print(e.message);
    }
  }
}

export default App;
