import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('덧셈할 문자열을 입력해 주세요.');
    const input = await Console.readLineAsync('');

    if (input === "") {
      return Console.print("결과 : 0");
    }

    let deli = /[,|:]/;
    let NPart = input;

    if (input.startsWith("//")) {
      if (input.indexOf("\\n") !== 3 || !isNaN(input[2])) {
        throw new Error("[ERROR] 커스텀 구분자 양식이 잘못됐습니다.");
      }
      const parts = input.split("\\n");


      const custom = parts[0].substring(2);


      deli = new RegExp(`[${custom},|:]`);
      NPart = parts[1];
    } else if (isNaN(input[0]) || input[0] === "-") {
      throw new Error("[ERROR] 커스텀 구분자를 사용하지 않는다면 양수로 시작해야 합니다.");
    }

    const numbers = NPart.split(deli).map(Number);

  
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (isNaN(number) || number < 1) {
        throw new Error("[ERROR] 계산식에 구분자, 양수 이외의 값이 존재합니다.");
      }
    }
    Console.print("결과 : " + numbers.reduce((sum, number) => sum + number, 0));
  }
}
export default App;