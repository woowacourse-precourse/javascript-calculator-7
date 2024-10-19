import { Console } from "@woowacourse/mission-utils";

let separator = [",",":"];

const findSeparator = (input) => {
  const INPUT_ARRAY = input.split("");
  if (input.slice(0,2) === "//") {
    const START = input.indexOf("//");
    const END = input.indexOf("\\n");
    if (START === 1 || END === -1) {
      throw new Error("[ERROR] 커스텀 구분자 추가를 위해선 //와 \\n 사이에 추가하고자 하는 구분자를 입력해주세요.");
    } else {
      const customSeparator = input.slice(START, END);
      separator.push(customSeparator);
      if (customSeparator.length > 1 || !isNaN(customSeparator)){
        throw new Error("[ERROR] 커스텀 구분자의 입력이 잘못됐습니다.")
      }
      separator.push(input.slice(customSeparator))
      return INPUT_ARRAY.slice(END + 2);
    }
  }
  return INPUT_ARRAY;
}

const getNumber = (inputArray) => {
  let currentNum = '';
  const RESULT = [];
  let isContinuous = 0;
  inputArray.forEach((string) => {
    if (separator.includes(string)) {
      isContinuous += 1;
      if (isContinuous > 1) {
        throw new Error("[ERROR] 구분자가 연속으로 사용됐습니다.");
      }
      if (currentNum.length > 0) {
        RESULT.push(currentNum);
        currentNum = '';
      }
    } else {
      isContinuous = 0;
      currentNum += string;
    }
  });

  if (currentNum !== '') {
    RESULT.push(currentNum);
  }
  return RESULT;
}

const calculate = (input) => {
  if (isNaN(input[input.length - 1])) {
    throw new Error("[ERROR] 더할 숫자 없이 구분자만 입력됐습니다.");
  }
  let result = 0;
  getNumber(input).map((number)=>{
    if (Number(number) < 0) {
      throw new Error("[ERROR] 양수를 입력해주세요.");
    }
    if (isNaN(number)) {
      throw new Error("[ERROR] 올바른 숫자를 입력해주세요.");
    }
    result += Number(number);
  })
  return result;
}

class App {
  async run(
  ) {
    let input="";
    Console.print("덧셈할 문자열을 입력해 주세요.");
    input = await Console.readLineAsync(input);
    Console.print("결과 : " + calculate(findSeparator(input)));
  }
}

export default App;
