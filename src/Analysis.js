import { PATTERN } from './constant/index.js';
import PatternUtil from './utils/PatternUtil.js';

class Analysis {
  #seperators;

  constructor(seperator) {
    this.#seperators = [...seperator];
  }

  getInfo(str) {
    const { newSeperators, deletedList } = this.#findSeperators(str);
    const cleanedString = PatternUtil.removePattern(str, deletedList);
    const seperatedArr = this.#splitString(cleanedString, newSeperators);

    return { newSeperators, seperatedArr };
  }

  #findSeperators(str) {
    const newSeperators = [...this.#seperators];
    const deletedList = [];

    PatternUtil.findPattern(str, PATTERN).forEach((item) => {
      deletedList.push(item[0]);
      newSeperators.push(item[1]);
    });

    return { newSeperators, deletedList };
  }

  #splitString(str, newSeperators) {
    const regexp = new RegExp(newSeperators.map((char) => char && `\\${char}`, 'g').join('|'));
    return str.split(regexp);
  }
}

export default Analysis;
