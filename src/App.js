import { Console } from "@woowacourse/mission-utils";

const SEPARATORS = [",",":"];
const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const findSeparator = (input) => {
  if(input.startsWith("//")){
    const START = input.indexOf("//") + 2;
    const END = input.indexOf("\\n");

    if (START === 1 || END === -1) {
      throw new Error("[ERROR] 커스텀 구분자 추가를 위해선 //와 \\n 사이에 추가하고자 하는 문자(공백 제외)를 입력해주세요.");
    }

    const customSeparator = input.slice(START, END);
    SEPARATORS.push(customSeparator);

    if (!isNaN(customSeparator)){
      throw new Error("[ERROR] 커스텀 구분자 추가를 위해선 //와 \\n 사이에 추가하고자 하는 문자(공백 제외)를 입력해주세요.");
    }

    return input.slice(END + 2);
  }

  if (isNaN(input[0])) {
    throw new Error("[ERROR] 양수(정수)를 입력해주세요.");
  }
  return input;
};

const getNumber = (input) => {
  const regexSeparator = new RegExp(SEPARATORS.map(escapeRegExp).join('|'));
  return input.split(regexSeparator);
}

const calculate = (input) => {
  let total = 0;
  getNumber(input).forEach((number)=>{
    let numValue = Number(number);

    if (numValue < 0) {
      throw new Error("[ERROR] 양수(정수)를 입력해주세요.");
    }

    if(number.length === 0) {
      throw new Error("[ERROR] 구분자 뒤에 더할 숫자를 입력해주세요.")
    }

    if (isNaN(numValue)) {
      throw new Error("[ERROR] 디폴트 구분자(, 또는 :) 또는 커스텀 구분자를 사용해주세요.");
    }

    total += numValue;
  })

  return total;
}

class App {
  async run(
  ) {
    let input="";
    Console.print("덧셈할 문자열을 입력해 주세요.");
    input = await Console.readLineAsync(input);
    const RESULT = calculate(findSeparator(input))
    Console.print(`결과 : ${RESULT}`);
  }
}

export default App;
