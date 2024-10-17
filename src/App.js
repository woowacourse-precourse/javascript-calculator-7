import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    let sum = 0;
    let startIndex = 0;
    let customSeparator = null;  // 커스텀 구분자 변수
    
    const input = await Console.readLineAsync("숫자를 입력해주세요.");
    Console.print(`${input[0]},${input[1]},${input[2]},${input[3]},${input[4]},${input[5]}`);

    // 구분자 찾는 함수
    const findIndex = (input, startIndex, customSeparator) => {
      if (customSeparator) {
        // 커스텀 구분자가 있다면 해당 구분자를 사용
        return input.indexOf(customSeparator, startIndex);
      } else {
        // 기본 구분자인 쉼표(,)와 콜론(:)을 사용
        let fIndex = input.indexOf(',', startIndex);
        let sIndex = input.indexOf(':', startIndex);
        return Math.min(fIndex === -1 ? input.length : fIndex, sIndex === -1 ? input.length : sIndex);
      }
    };

    // 커스텀 구분자 처리 (//;\n 형식)
    if (input.startsWith('//')) {
      customSeparator = input[2];  // 커스텀 구분자 추출
      Console.print(`${customSeparator}`);
      startIndex = 5;  // 숫자가 시작하는 부분의 인덱스를 5로 설정
    }

    while (startIndex < input.length) {
      // 구분자 인덱스를 찾음 (커스텀 구분자 또는 기본 구분자 사용)
      const nextIndex = findIndex(input, startIndex, customSeparator);

      // 만약 nextIndex가 -1이면 문자열 끝까지 간 것이므로 루프 종료
      if (nextIndex === -1) {
        break;
      }

      // 구분자를 기준으로 숫자 추출
      const number = input.substring(startIndex, nextIndex);

      // 숫자를 합계에 더하기
      sum += Number(number);

      // 다음 구분자로 이동
      startIndex = nextIndex + 1;
    }

    // 결과 출력
    Console.print(`합계: ${sum}`);
  }
}

export default App;
