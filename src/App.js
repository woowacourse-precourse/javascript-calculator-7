import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      Console.print("덧셈할 문자열을 입력해 주세요.");
      const input = await Console.readLineAsync();
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error; // 테스트에서 예외 처리를 확인하기 위해 재발생
    }
  }

  calculate(input) {
    if (!input) return 0; // 빈 문자열일 경우 0을 반환
    
    const customDelimiterMatch = input.match(/^\/\/(.)\\n/);
    let delimiters = [',', ':'];
    let numbersString = input;

    if (customDelimiterMatch) {
      delimiters.push(customDelimiterMatch[1]); // 커스텀 구분자 추가
      numbersString = input.split('\\n')[1]; // 커스텀 구분자 이후의 숫자 문자열 추출
    }

    const numbers = numbersString.split(new RegExp(`[${delimiters.join('')}]`)).map(Number);

    // 음수나 숫자가 아닌 값이 포함되어 있는 경우 에러 발생
    if (numbers.some((number) => number < 0 || isNaN(number))) {
      throw new Error("[ERROR] 잘못된 입력 값입니다.");
    }

    return numbers.reduce((sum, number) => sum + number, 0); // 숫자의 합 반환
  }
}

export default App;

