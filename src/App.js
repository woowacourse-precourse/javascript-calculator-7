import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await this.getInput();
      const result = this.add(input);
      this.printResult(result);
    } catch (error) {
      Console.print(`[ERROR]${error.message}`);
      throw error;  // 예외를 다시 던져서 테스트에서 잡히도록 처리
    }
  }

  async getInput() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return input;
  }

  add(input) {
    if (input === "") {
      return 0;
    }

    let delimiter = /[,|:]/; // 기본 구분자 설정

    if (input.startsWith("//")) {
      const parts = input.split("\\n");

      // 커스텀 구분자만 입력하거나 숫자 미입력의 경우 대응
      if (parts.length < 2 || parts[1].trim() === "") {
        throw new Error("[ERROR] 잘못된 입력 형식입니다.");
      }

      // 커스텀 구분자가 /, \, \n인 경우 구분자로 설정되도록 대응
      const customDelimiter = parts[0].slice(2).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      delimiter = new RegExp(`${customDelimiter}`);
      input = parts[1];
    }

    const numbers = input
      .split(delimiter)
      .filter(num => num !== "") // 구분자가 중복되어도 연산되도록 필터링
      .map(num => {
        const parsedNum = Number(num);
        if (isNaN(parsedNum)) {
          throw new Error("[ERROR] 숫자가 아닌 값이 포함되었습니다.");
        } else if (parsedNum < 0) {
          throw new Error("[ERROR] 양수로만 이루어져야 합니다.");
        }
        return parsedNum;
      });

    return numbers.reduce((sum, num) => sum + num, 0);
  }

  printResult(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default App;
