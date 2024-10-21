export default class CalculationService{
  #ioHandler;

  constructor(ioHandler){
    this.#ioHandler = ioHandler;
  }

  execute(){
    const rawInput = this.#ioHandler.getInput();
    const result = rawInput;
    this.#ioHandler.printOutput(result);
  }
}
