export default class CalculationService{
  #ioHandler;
  #parser;

  constructor(ioHandler, parser){
    this.#ioHandler = ioHandler;
    this.#parser = parser;
  }

  execute(){
    const rawInput = this.#ioHandler.getInput();
    const parsedInput = this.#parser.parse(rawInput);
    this.#ioHandler.displayResult(parsedInput);
  }
}
