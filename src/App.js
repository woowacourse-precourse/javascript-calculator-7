import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    
    // 입력값을 구분자와 숫자로 파싱
    const { delimiter, numbers } = this.parseInput(input);
    
    // 구분자를 기준으로 숫자를 나누어 배열로 저장
    const splits = this.splitNumbers(numbers, delimiter);

    // 배열의 각 요소를 숫자로 변환하여 더하기
    let sum = 0;
    for (let i = 0; i < splits.length; i++) {
      const num = parseInt(splits[i], 10);
      
      // 숫자가 아니거나 음수이면 에러 발생
      if (isNaN(num)) {
        throw new Error(`[ERROR] 유효하지 않은 입력값입니다: ${splits[i]}`);
      }
      if (num < 0) {
        throw new Error(`[ERROR] 음수는 허용되지 않습니다: ${num}`);
      }
      sum += num;
    }

    Console.print("결과 : " + sum);
  }

  parseInput(input) {
    // 입력값이 없으면 0을 반환
    if (input.trim() === '') {
      return { delimiter: '', numbers: '0' };
    }

    // 커스텀 구분자 패턴 확인
    const customDelimiterRegex = /^\/\/(.)\\n(.*)/;
    const match = input.match(customDelimiterRegex);

    // 커스텀 구분자가 있으면 구분자와 숫자를 반환
    if (match) {
      return {
        delimiter: match[1],
        numbers: match[2]
      };
    }

    // 기본 구분자(쉼표, 콜론) 외 다른 구분자가 있는지 체크
    if (!/^[0-9,:\n]*$/.test(input)) {
      throw new Error('[ERROR] 유효하지 않은 구분자가 포함되었습니다.');
    }

    return {
      delimiter: ',|:',
      numbers: input
    };
  }

  // 구분자를 기준으로 숫자를 나누어 배열로 저장
  splitNumbers(numbers, delimiter) {
    // 중복된 구분자 체크
    if (numbers.includes(',,') || numbers.includes('::')) {
      throw new Error('[ERROR] 중복된 구분자가 포함되었습니다.');
    }

    if (delimiter === '') {
      return [numbers];
    }

    return numbers.split(new RegExp(delimiter));
  }
}

export default App;
