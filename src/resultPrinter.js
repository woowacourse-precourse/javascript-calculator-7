import { Console } from "@woowacourse/mission-utils"; // woowacourse에서 제공

// ResultPrinter 클래스는 결과를 콘솔에 출력하는 역할
class ResultPrinter {
  print(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default ResultPrinter;
