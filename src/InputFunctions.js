import { Console } from "@woowacourse/mission-utils";

export function getInput() {
  return Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
}

function isPositiveNumber(numberList) {
  return numberList.every((number) => Number(number) > 0);
}

export function allValidationAndCalc(input) {
  const isCustom = input.customSeparatorValidation(input.value);
  const isColonComma = input.colonCommaValidation();

  if (isCustom) {
    const charExceptSeparator = input.value.slice(5);
    const charList = charExceptSeparator.split(input.value[2]);
    if (!isPositiveNumber(charList)) {
      return 0;
    }
    charList.forEach((number) => {
      input.resultAdd(Number(number));
    });
    return 1;
  }
  if (isColonComma) {
    const inputList = input.value.split(/\,|\:/);
    if (!isPositiveNumber(inputList)) {
      return 0;
    }
    inputList.forEach((number) => {
      input.resultAdd(Number(number));
    });
    return 2;
  }
  return 0;
}
