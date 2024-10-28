import { DELIMITER } from '../constants/constant.js';
import { getCarNames } from '../view/view.js';

class Controller {
  constructor() {
    this.cars = [];
  }

  async execute() {
    const enteredCarNames = await getCarNames();
    const splittedNames = enteredCarNames.split(DELIMITER);
    console.log('splittedNames', splittedNames);
  }
}

export default Controller;
