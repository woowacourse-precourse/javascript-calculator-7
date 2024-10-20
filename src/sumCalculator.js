import { MissionUtils } from "@woowacourse/mission-utils";

const sumCalculator = (numbersArray) => {
  const result = numbersArray.reduce((acc, cur) => acc + cur, 0);
  MissionUtils.Console.print(`결과 : ${result}`);
};

export default sumCalculator;
