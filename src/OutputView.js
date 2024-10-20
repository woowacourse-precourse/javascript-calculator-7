import { Console } from '@woowacourse/mission-utils';

// 결과를 사용자에게 출력하는 역할
const OutputView = {
  printError(message) {
    Console.print(message);
  },

  printResult(value) {
    Console.print(`결과 : ${value}`);
  },
};

export default OutputView;
