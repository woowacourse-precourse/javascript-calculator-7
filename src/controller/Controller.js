import Car from '../model/model.js';
import { DELIMITER } from '../constants/constant.js';
import { getAttempts, getCarNames } from '../view/view.js';
import { validateAttempts, validCarName } from '../utils/validator.js';

class Controller {
  constructor() {
    this.cars = [];
  }

  async execute() {
    const enteredCarNames = await getCarNames();
    const splittedNames = enteredCarNames.split(DELIMITER);
    validCarName(splittedNames);
    this.cars = this.createCars(splittedNames);
    const attempts = await getAttempts();
    validateAttempts(attempts);
  }

  createCars(splittedNames) {
    return splittedNames.map((name) => new Car(name));
  }
}

export default Controller;
