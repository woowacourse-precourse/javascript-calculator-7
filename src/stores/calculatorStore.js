import { ADD_INPUT, CALCULATE_RESULT } from '../actions/calculatorAction.js';

class CalculatorStore {
  constructor() {
    this.state = {
      input: '',
      result: 0,
    };
    this.listeners = [];
  }

  // 결과값 반환
  getResult() {
    return this.state.result;
  }

  // 엑션 리스너 (엑션의 종류에 따라 상태값 변경)
  handleAction(action) {
    switch (action.type) {
      case ADD_INPUT:
        this.addInput(action.payload);
        break;
      case CALCULATE_RESULT:
        this.calculateResult();
        break;
      default:
        break;
    }
  }

  // input을 상태값에 저장
  addInput(input) {
    this.state.input = input;
  }

  // 결과값 계산
  calculateResult() {
    const input = this.state.input;
    let nums = [];

    if (input.includes('0')) {
      throw new Error('[ERROR] 0는 허용되지 않습니다.');
    }

    const delimiters = [',', ':'];
    let numbers = input;

    if (input.startsWith('//')) {
      const [delimiterPart, ...rest] = input.split('\\n');
      const customDelimiter = delimiterPart.slice(2);
      if (!isNaN(customDelimiter)) {
        throw new Error('[ERROR] 구분자는 숫자가 될 수 없습니다.');
      }
      if (delimiters.indexOf(customDelimiter) === -1) {
        delimiters.push(customDelimiter);
      }

      numbers = rest.join('');
    }

    for (const delimiter of delimiters) {
      numbers = numbers.split(delimiter).join(',');
    }

    if ([...numbers].every((number) => number === ',')) {
      nums = [0];
    } else {
      nums = numbers.split(',').map((number) => {
        const num = Number(number);
        if (isNaN(num)) {
          throw new Error('[ERROR] 잘못된 입력입니다.');
        }

        return num;
      });
    }

    if (nums.some((num) => num < 0)) {
      throw new Error('[ERROR] 음수는 허용되지 않습니다.');
    }

    this.state.result = nums.reduce((acc, cur) => (acc += cur), 0);
    this.notify();
  }

  // 리스너 알림
  notify() {
    this.listeners.forEach((listener) => listener(this.state));
  }
}

const calculatorStore = new CalculatorStore();
export default calculatorStore;
