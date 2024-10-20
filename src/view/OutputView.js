import { Console } from '@woowacourse/mission-utils';

const OUTPUT_MESSAGE = '결과 :';

const OutputView = {
  printTotal(total) {
    Console.print(`${OUTPUT_MESSAGE} ${total}`);
  },
};

export default OutputView;
