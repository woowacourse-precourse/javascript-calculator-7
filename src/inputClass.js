export default class Input {
  constructor(inputString) {
    this.value = inputString;
    this.result = 0;
  }

  isEmpty(){
    return this.value.length === 0;
  }
}
