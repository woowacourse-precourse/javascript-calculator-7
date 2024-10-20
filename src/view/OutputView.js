import { print } from '../util/consoleUtil.js';

// 결과를 사용자에게 출력하는 역할
const OutputView = {
  printError(message) {
    print(message);
  },

  printResult(value) {
    print(`결과 : ${value}`);
  },
};

export default OutputView;
