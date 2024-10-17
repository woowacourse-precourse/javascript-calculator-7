export default class Input {
  constructor(inputString) {
    this.value = inputString;
    this.result = 0;
  }

  isEmpty() {
    return this.value.length === 0;
  }

  colonCommaValidation() {
    const numberList = this.value.split(/\,|\:/);
    return numberList.every((number) => !isNaN(Number(number)));
  }

  customSeparatorValidation() {
    const FIRST_SECOND_STRING = this.value.slice(0, 2);
    const FORTH_FIFTH_STRING = this.value.slice(3, 5);

    if (FIRST_SECOND_STRING === "//" && FORTH_FIFTH_STRING === "\\n") {
      return true;
    }
    return false;
  }
}
