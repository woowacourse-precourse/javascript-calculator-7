import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요."
      );
      // 공백을 입력받았을 때, 0을 출력
      if (
        input === "''" ||
        input === '""' ||
        input.trim() === "" ||
        input.trim() === ""
      ) {
        Console.print(0);
        return;
      }

      //정규표현식을 이용해서 양수만 입력받음(음수와 0제외) / 연산자 : , 그리고 특수연산자 입력 받아야 함
      //배열로 입력 받아서 연산하는게 나을까 일단, 정규표현식이 있는지는 검증해야 하니까
      const isPositive = (input) => /^[+]?[1-9]\d*(\.\d)?$/.test(input);

      if (isPositive(input)) {
        Console.print(input);
      } else {
        Console.print(
          "입력 값에는 양수, 쉼표(,), 콜론(:), 커스텀 구분자(//와 \n 사이 사용자 임의 지정)만 입력이 가능합니다."
        );
      }
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
