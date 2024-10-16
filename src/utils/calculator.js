import { MissionUtils } from '@woowacourse/mission-utils';

const calculator = (arr) => {
    const result = arr.reduce((acc, cur) => acc + cur, 0);
    MissionUtils.Console.print(`결과 : ${result}`);
};

export default calculator;
