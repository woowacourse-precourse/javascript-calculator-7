import { getStringInput, getArrayInput } from '../view/input.js';
import { printResult } from '../view/output.js';
import {
  determineNumber,
  classificationDelimiter,
} from '../model/calculate.js';
import { CONSTANTS } from '../constants/constants.js';

const { NUMBERS_FIRST_CHARACTER } = CONSTANTS;
class Controller {
  async run() {
    // 문자열 입력 받기
    const inputNumber = await getStringInput();

    // 문자열을 배열로 변환
    const inputArray = getArrayInput(inputNumber);

    // 문자의 첫글자로 판별하기
    const initialCharacter = determineNumber(
      inputArray[NUMBERS_FIRST_CHARACTER],
    );

    // 구분자를 통해 계산 로직 분기 처리
    const result = classificationDelimiter(inputNumber, initialCharacter);
    printResult(result);
  }
}

export default Controller;
