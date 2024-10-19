import { Console } from "@woowacourse/mission-utils";
import { ResultMessage } from "../common/message.js";
import addInput from "../controller/result/addInput.js";

const printResult = (numbers) => {
  let result = addInput(numbers);
  Console.print(`${ResultMessage}${result}`);
};

export default printResult;
