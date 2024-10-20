import { Console } from '@woowacourse/mission-utils';

export default class ViewOut {
   async showResult(result) {
      await Console.print('결과 : ' + result);
   }
}
