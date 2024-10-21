import { printResult } from '../utils/missionUtils.js';

const checkEmptyInput = function checkEmptyInputFunc(input) {
  if (input.trim() === '') {
    printResult(0);
    return true;
  }
  return false;
};

export default checkEmptyInput;
