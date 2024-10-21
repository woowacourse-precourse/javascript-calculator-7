import { Console } from "@woowacourse/mission-utils"; // woowacourse에서 제공

// ResultPrinter 클래스는 결과를 콘솔에 출력하는 역할
class ResultPrinter {
  /**
   * 계산 결과를 콘솔에 출력
   * @param {number} result - 출력할 계산 결과
   */
  print(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default ResultPrinter;
