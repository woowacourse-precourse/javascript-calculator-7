import { Console } from "@woowacourse/mission-utils";

function resultUI(totalSum) {
  const RESULT_START = '결과 :';
  const RESULT_MESSAGE = `${RESULT_START} ${totalSum}`;
  Console.print(RESULT_MESSAGE);
};

export default resultUI;
