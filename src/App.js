import { Console } from "@woowacourse/mission-utils";

class App {
  // 1. 구분자 추출하기
  extractDelimeter(inputString) {
    // 커스텀 구분자 추출하기 위한 캡처 정의
    const CAPTURE = new RegExp('//([^0-9])\\\\n', 'g');
    
    // 커스텀 구분자 그룹 캡처하기
    const matches = [...inputString.matchAll(CAPTURE)];

    // 커스텀 구분자만 추출하기
    const delimeters = matches.map(match => match[1]);

    return delimeters;
  }

  // 2. 커스텀 구분자 부분 제거하기
  extractMathExpression(inputString) {
    // 커스텀 구분자 추출하기 위한 캡처 정의
    const CAPTURE = new RegExp('//([^0-9])\\\\n', 'g');

    // 커스텀 구분자 부분 제거하기
    const mathExpression = inputString.replace(CAPTURE, '');

    return mathExpression;
  }

  // 3. 구분자 기반 분리하기
  splitDelimeter(expression, delimeters) {
    // 기본 구분자 정의
    const DEFAULT_DELIMETERS = [':', ','];

    // 커스텀 구분자 이스케이프 처리
    const escaped_delimeters = this.escapeSpecialChars(delimeters);

    // 모든 구분자
    const allDelimeters = escaped_delimeters.concat(DEFAULT_DELIMETERS);

    // 모든 구분자를 split에 들어갈 표현식으로 만들기
    const allDelimetersRegex = allDelimeters.join('|');

    // 구분자 기반 분리하여 숫자 리스트 반환하기
    const numbers = expression.split(new RegExp(allDelimetersRegex));

    return numbers;
  }

  // 3-1. 커스텀 구분자 전처리하기
  escapeSpecialChars(delimeters) {
    // 이스케이프 처리가 필요한 특수 문자 목록
    const EXCAPE_CHARS = /([.*+?^${}()|\[\]\\/])/g;

    const escaped_delimeters = delimeters.map(del => del.replace(EXCAPE_CHARS, '\\$1'));

    return escaped_delimeters;
  }

  // 4. 덧셈 연산하기
  addAllNumbers(numbers) {
    if (this.isNumbersValid(numbers)) {
      const sum = numbers.reduce((prev, next) => prev + Number(next), 0);

      return sum;
    }
    else {
      throw Error("[ERROR] 잘못된 수식이 입력되었습니다.");
    }
  }

  // 4-1. 숫자 유효 검증하기
  isNumbersValid(numbers) {
    // 숫자인 경우 true 반환
    // 숫자가 아니거나, 숫자지만 음수 혹은 0인 경우 false 반환
    const isValid = numbers.some(number => isNaN(Number(number)) || Number(number) <= 0);
    
    return isValid;
  }

  async run() {
    const inputString = Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    // 1. 구분자 추출하기
    const delimeters = this.extractDelimeter(inputString);

    // 2. 커스텀 구분자 부분 제거하기 (수식 구하기)
    const expression = this.extractMathExpression(inputString);

    // 3. 구분자 기반 분리하기 (숫자 리스트 반환)
    const numbers = this.splitDelimeter(expression, delimeters);

    // 4. 덧셈 연산하기
    try {
      const sum = this.addAllNumbers(numbers);
      Console.print(`결과 : ${sum}`);
    }
    catch (e) {
      throw(e);
    }
  }
}

export default App;
