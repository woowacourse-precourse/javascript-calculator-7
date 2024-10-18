import { PATTERN } from './constant/index.js';
import ArrayUtil from './utils/ArrayUtil.js';
import PatternUtil from './utils/PatternUtil.js';

class Analysis {
  #seperators;

  constructor(seperator) {
    this.#seperators = [...seperator];
  }

  getInfo(str) {
    const { newSeperators, deletedList } = this.#findSeperators(str);
    const cleanedString = PatternUtil.removePattern(str, deletedList);
    const seperatedArr = ArrayUtil.splitFromSeperator(cleanedString, newSeperators);

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
}

export default Analysis;
