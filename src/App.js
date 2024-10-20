import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const givenNum = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
      let custom = '';
      let isCustom = false;
      if (givenNum[0] === '/' && givenNum[1] === '/' && givenNum[3] === '\\' && givenNum[4] === 'n') {
        custom = givenNum[2];
        isCustom = true;
      }

      const splitGivenNum = (arr) => {
        let splitNum = [];
        if (isCustom) {
          splitNum = arr.slice(5).split(new RegExp(`[${custom},:]`));
          return splitNum;
        }
        splitNum = arr.split(new RegExp(`[,:]`));
        return splitNum;
      }

      const getSum = (arr) => {
        return arr.reduce((a, c) => {
          return a + Number(c);
        }, 0);
      }

      const sum = getSum(splitGivenNum(givenNum));
      MissionUtils.Console.print(`결과 : ${sum}`);
    } catch {
      MissionUtils.Console.print('[ERROR]');
      throw new Error('[ERROR]');
    }
  }
}

export default App;
