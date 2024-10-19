import { Console } from '@woowacourse/mission-utils';

export default class Controller {
  async control(model, viewIn, viewOut) {
    const input = await viewIn.getInput();
    const numbers = model.extractNumbers(input);

    Console.print("numbers:" + numbers);
    // Todo: 결과값 구하기
    // Todo: 사용자에게 결과값 보여주기
  }
}
