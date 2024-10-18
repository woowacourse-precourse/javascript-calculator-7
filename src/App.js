import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    let sum = 0;
    let startIndex = 0;
    let customSeparator = null;  // 커스텀 구분자 변수
    
    // 사용자 입력 받기
    const input = await Console.readLineAsync("안녕하세요! 숫자 덧셈 계산기입니다. 쉼표(,) 또는 콜론(:)을 구분자로 사용해 숫자를 입력하거나, 원하는 구분자를 설정해보세요!");
    // Console.print(`입력값: ${input}`);

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
      // Console.print(`커스텀 구분자: ${customSeparator}`);
      
      // 개행 문자를 찾기 위해 String.raw로 처리
      const customIndex = input.indexOf(String.raw`\n`);  // 이스케이프된 개행 문자를 찾기
      if (customIndex !== -1) {
        startIndex = customIndex + 2;  // 실제 \n 문자 이후부터 숫자가 시작됨
        // Console.print(`숫자가 시작되는 인덱스: ${startIndex}`);
      } else {
        // Console.print("잘못된 형식입니다. \\n 문자가 없습니다.");
        return;
      }
    }

    // 구분자를 기준으로 숫자 더하기 처리
    while (true) {
      const nextIndex = findIndex(input, startIndex, customSeparator);

      if (nextIndex === -1 || nextIndex >= input.length) {
        // 더 이상 구분자가 없으면 마지막 숫자를 처리하고 종료
        const lastPart = input.substring(startIndex).trim();
        if (lastPart !== "") {
          sum += Number(lastPart);
        }
        break;
      }

      // 구분자 전까지 숫자 추출
      const part = input.substring(startIndex, nextIndex).trim();
      Console.print(`추출된 숫자: ${part}`);

      if (part !== "") {
        sum += Number(part);  // 숫자를 합계에 더함
      }

      // 다음 구분자로 이동
      startIndex = nextIndex + 1;  // 구분자 다음 인덱스로 이동
    }

    // 결과 출력
    Console.print(`합계: ${sum}`);
  }
}

export default App;
