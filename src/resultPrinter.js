import { Console } from "@woowacourse/mission-utils"; // woowacourse에서 제공

// ResultPrinter 클래스는 결과를 콘솔에 출력하는 역할을 함
export default class ResultPrinter {
  print(result) {
    // 결과의 출력은 Console.print()로 제한함
    Console.print(`결과: ${result}`);
  }
}
