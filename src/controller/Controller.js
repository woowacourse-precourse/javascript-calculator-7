import Car from '../model/model.js';
import { DELIMITER } from '../constants/constant.js';
import { Random } from '@woowacourse/mission-utils';
import { getAttempts, getCarNames, displayRaceProgress } from '../view/view.js';
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

    for (let attemptIndex = 0; attemptIndex < attempts; attemptIndex++) {
      this.startCarRace(this.cars);
      displayRaceProgress(this.cars);
    }
  }

  createCars(splittedNames) {
    return splittedNames.map((name) => new Car(name));
  }

  startCarRace(cars) {
    cars.forEach((car) => {
      const number = Random.pickNumberInRange(0, 9);
      car.race(number);
    });
    return cars;
  }
}

export default Controller;
