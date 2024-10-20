import { Console } from "@woowacourse/mission-utils"; // woowacourse에서 제공

// ResultPrinter 클래스는 결과를 콘솔에 출력하는 역할을 함
class ResultPrinter {
  print(result) {
    // 결과의 출력은 Console.print()로 제한함
    // 구분자 배열 출력
    Console.print(`사용된 구분자: ${result.delimiters.join(", ")}`);

    // 계산할 문자열 출력
    Console.print(`계산할 문자열: ${result.calculationString}`);
  }
}

export default ResultPrinter;
