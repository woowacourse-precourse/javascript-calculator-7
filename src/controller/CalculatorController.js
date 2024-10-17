import Input from "../view/Input.js";

export default class CalculatorController {
  async run() {
    await Input.readLine();
  }
}