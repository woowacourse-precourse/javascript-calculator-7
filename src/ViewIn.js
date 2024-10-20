import { Console } from '@woowacourse/mission-utils';

export default class ViewIn {

   async getInput() {
      Console.print('덧셈할 문자열을 입력해 주세요.');
      return await Console.readLineAsync('');
   }
}
