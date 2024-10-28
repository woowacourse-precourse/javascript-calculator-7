import { DELIMITER } from '../constants/constant.js';
import { getCarNames } from '../view/view.js';
import { validCarName } from '../utils/validator.js';

class Controller {
  constructor() {
    this.cars = [];
  }

  async execute() {
    const enteredCarNames = await getCarNames();
    const splittedNames = enteredCarNames.split(DELIMITER);
    console.log('splittedNames', splittedNames);
    validCarName(splittedNames);
  }
}

export default Controller;
