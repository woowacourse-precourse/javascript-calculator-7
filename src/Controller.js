import { Console } from '@woowacourse/mission-utils';

export default class Controller {
  async control(model, viewIn, viewOut) {
    const input = await viewIn.getInput();
    const numbers = model.extractNumbers(input);
    const total = model.total(numbers);

    await viewOut.showResult(total);
  }
}
