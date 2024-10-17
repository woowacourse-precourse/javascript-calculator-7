export default class Input {
  constructor(inputString) {
    this.value = inputString;
    this.result = 0;
  }

  isEmpty(){
    return this.value.length === 0;
  }

  colonCommaValidation(){
    const numberList = this.value.split(/\,|\:/);
    return numberList.every((number) => !isNaN(Number(number)));
  }
}
