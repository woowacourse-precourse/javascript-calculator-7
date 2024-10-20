import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const INPUT = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    // 입력값을 구분자와 숫자로 파싱
    const { delimiter, numbers } = this.parseInput(INPUT);
    // 구분자를 기준으로 숫자를 나누어 배열로 저장
    const SPLITS = numbers.split(new RegExp(`${delimiter}|,|:`));
    // Console.print(SPLITS);
    
    // 배열의 각 요소를 숫자로 변환하여 더하기
    let sum = 0;
    for (let i = 0; i < SPLITS.length; i++) {
      sum += parseInt(SPLITS[i]) || 0;
    }
    Console.print("결과 : " + sum);
  }

  parseInput(input) {
    // 입력값이 커스텀 구분자를 가지고 있는지 확인
    const customDelimiterRegex = /^\/\/(.)\n(.*)/;
    const match = input.match(customDelimiterRegex);

    // 커스텀 구분자가 있으면 구분자와 숫자를 반환
    if (match) {
      return {
        delimiter: match[1],
        numbers: match[2]
      };
    }

    // 커스텀 구분자가 없으면 빈 문자열과 숫자를 반환
    return {
      delimiter: '',
      numbers: input
    };
  }
}

export default App;