import { PATTERN } from './constant';
import Util from './PatternUtil';

class Analysis {
  #seperators;

  constructor(seperator) {
    this.#seperators = [...seperator];
  }

  getInfo(str) {
    const { newSeperators, deletedList } = this.#findSeperators(str);
    const cleanedString = Util.removePattern(str, deletedList);
    const seperatedArr = this.#splitString(cleanedString);

    return { newSeperators, seperatedArr };
  }

  #findSeperators(str) {
    const newSeperators = [...this.#seperators];
    const deletedList = [];

    Util.findPattern(str, PATTERN).forEach((item) => {
      deletedList.push(item[0]);
      newSeperators.push(item[1]);
    });

    return { newSeperators, deletedList };
  }

  #splitString(str) {
    const regexp = new RegExp(`[${this.#seperators.join('')}]`);
    return str.split(regexp).filter((item) => item.length);
  }
}

export default Analysis;
