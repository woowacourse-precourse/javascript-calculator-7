import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    let sum = 0;
    let startIndex = 0;
    let customSeparator = null;  // 커스텀 구분자 변수

    // 사용자 입력 받기
    const input = await Console.readLineAsync("안녕하세요! 숫자 덧셈 계산기입니다. 쉼표(,) 또는 콜론(:)을 구분자로 사용해 숫자를 입력하거나, 원하는 구분자를 설정해보세요!");

    // 구분자 찾는 함수
    const findIndex = (input, startIndex, customSeparator) => {
      if (customSeparator) {
        return input.indexOf(customSeparator, startIndex);
      } else {
        let fIndex = input.indexOf(',', startIndex);
        let sIndex = input.indexOf(':', startIndex);
        return Math.min(fIndex === -1 ? input.length : fIndex, sIndex === -1 ? input.length : sIndex);
      }
    };

    // 커스텀 구분자 처리 (//;\n 형식)
    if (input.startsWith('//')) {
      customSeparator = input[2];  // 커스텀 구분자 추출
      const customIndex = input.indexOf(String.raw`\n`);  // 이스케이프된 개행 문자를 찾기
      if (customIndex !== -1) {
        startIndex = customIndex + 2;  // 실제 \n 문자 이후부터 숫자가 시작됨
      } else {
        Console.print("잘못된 형식입니다. \\n 문자가 없습니다.");
        return;
      }
    }

    // 구분자를 기준으로 숫자 더하기 처리
    while (true) {
      const nextIndex = findIndex(input, startIndex, customSeparator);

      if (nextIndex === -1 || nextIndex >= input.length) {
        const lastPart = input.substring(startIndex).trim();
        if (lastPart !== "") {
          sum += Number(lastPart);
        }
        break;
      }

      const part = input.substring(startIndex, nextIndex).trim();

      // 숫자가 아닌 값이 있으면 프로그램 종료
      if (isNaN(Number(part))) {
        throw new Error("[ERROR] 숫자가 아닌 값이 입력되었습니다.");  // 예외 던지기
      }

      // 음수 값이 있으면 프로그램 종료
      if (Number(part) < 0) {
        throw new Error("[ERROR] 음수 값이 입력되었습니다.");  // 예외 던지기
      }

      if (part !== "") {
        sum += Number(part);
      }

      startIndex = nextIndex + 1;
    }

    // 결과 출력
    if (sum) {
      Console.print(`결과 : ${sum}`);
    }
  }
}

export default App;
