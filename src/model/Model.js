import { MOVE_REQUIREMENT } from '../constants/constant.js';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = '';
  }

  race(pickNumber) {
    if (pickNumber > MOVE_REQUIREMENT) {
      this.distance = this.distance + '-';
    }
  }
}

export default Car;
