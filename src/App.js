const { Console } = require("@woowacourse/mission-utils");

class App {
  async run() {
    Console.readLineAsync("덧셈할 문자열을 입력해주세요.:\n", (input) => {
      try {
        const result = this.calculate(input);
        Console.print(`결과: ${result} `);
        Console.close(); //결과 출력 후 프로그램 종료
      } catch (e) {
        Console.print(`[ERROR] ${e.message}`);
        Console.close(); //에러 발생시 프로그램 종료
      }
    });
  }

  calculate(input) {
    //1. 빈 문자열 또는 null 입력 시 0 반환
    if (input == null || input == "") {
      return 0;
    }

    //2. 쉼표(,) 구분자를 사용하여 숫자를 분리하고 합산
    //3. 콜론(:) 구분자를 추가하여 숫자를 분리하고 합산
    let delimiters = [",", ":"];
    let numbersString = input;

    const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
    const numberStrings = numbersString.split(delimiterRegex);

    //4. 커스텀 구분자를 지정. 구분자는 //와 \n 사이에 위치
    if (input.startsWith("//")) {
      //커스텀 구분자 시작
      const delimiterEndIndex = input.indexOf("\n");
      if (delimiterEndIndex === -1) {
        throw new Error("커스텀 구분자가 정의되지 않았습니다.");
      }

      const customDelimiter = input.substring(2, delimiterEndIndex); //'커스텀 구분자~끝나는 구분자' 사이를 커스텀 구분자로 설정
      delimiters.push(customDelimiter); //구분자 배열에 추가
      numbersString = input.substring(delimiterEndIndex + 1); //입력 숫자 부분만 추출
    }

    //5. 구분자와 숫자 이외의 값 또는 음수를 입력할 경우 [ERROR]로 시작하는 메시지를 출력하고 프로그램을 종료

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }
}

export default App;
