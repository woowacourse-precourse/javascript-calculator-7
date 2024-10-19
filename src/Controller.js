import { Console } from '@woowacourse/mission-utils';

export default class Controller {
  async control(model, viewIn, viewOut) {
    const input = await viewIn.getInput();
    const numbers = model.extractNumbers(input);
    const total = model.total(numbers);

    Console.print("total:" + total);

    // Todo: 결과 보여주는 매서드 생성
    // viewOut.showResult(total);
  }
}
