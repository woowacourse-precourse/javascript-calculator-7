import { Console } from '@woowacourse/mission-utils';

// 커스텀 오류 클래스를 추가하여 throw할 때 사용할 수 있습니다.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function adder(numList) {
  let sum = 0;
  for (let i = 0; i < numList.length; i++) {
    if (isNaN(numList[i])) {
      continue; // 숫자가 아닌 값은 무시
    }
    sum += numList[i];
  }
  return sum;
}

function divideWithDefault(INPUT) {
  let strList = INPUT.split(/[, :]/);

  // 숫자가 아닌 문자는 무시하고 숫자만 처리
  let numList = strList.map(element => parseInt(element, 10)).filter(element => !isNaN(element));

  if (numList.some(element => element <= 0)) {
    throw new CustomError("[ERROR] 양수 값을 입력해주세요.");
  }

  let sum = adder(numList);
  Console.print(`결과 : ${sum}`);
}

function divideWithCustom(INPUT) {
  if (!INPUT.includes('\\n')) {
    throw new CustomError("[ERROR] 올바른 형식이 아닙니다.");
  }

  const DELIMETER = INPUT.match(/\/\/(.+)\\n/)[1];

  if (DELIMETER.match(/[0-9]/)) {
    throw new CustomError("[ERROR] 구분자로 숫자 값은 불가능합니다.");
  }

  const STR = INPUT.split('\\n')[1];
  let strList = STR.split(new RegExp(`[${DELIMETER},:]`));

  // 숫자가 아닌 문자는 무시하고 숫자만 처리
  let numList = strList.map(element => parseInt(element, 10)).filter(element => !isNaN(element));

  if (numList.some(element => element <= 0)) {
    throw new CustomError("[ERROR] 양수 값을 입력해주세요.");
  }

  let sum = adder(numList);
  Console.print(`결과 : ${sum}`);
}

class App {
  async run() {
    try {
      const INPUT = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.");

      if (INPUT.length == 0) {
        Console.print("결과 : 0");
      } else if (INPUT.startsWith('//')) {
        divideWithCustom(INPUT);
      } else {
        divideWithDefault(INPUT);
      }
    } catch (error) {
      // 오류가 발생한 경우 콘솔에 출력
      Console.print(error.message);
    }
  }
}

export default App;
