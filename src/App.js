import { Console } from '@woowacourse/mission-utils';

// 1. 사용자의 입력을 받음
async function getString() {
  try {
    const inputString = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    return inputString;
  } catch (error) {
    console.error('에러 발생:', error);
  }
}

// 4. 유효한 입력인지 확인
function vaildateInput(inputString, customString) {
  // 양수이며, 구분자 하나에 문자 하나 inputString = /^(\/\/\D\\n)?(\d+[:,${customString}]?){1, }(\d+)/
}

// 3. 커스텀구분자를 설정하는 기능
function customSeparator(inputString) {
  const regex = /^(?:\/\/)(\D)(?:\\n)/;
  const customString = inputString.match(regex);

  return customString ? customString[1] : null;
}

// 2. :나 , 커스텀 구분자로 구분된 문자열의 합 반환
function computeResult(inputString, customString) {
  let regex;
  let formattedInput;
  if (customString) {
    regex = new RegExp(`[\\n:,${customString}]`);
    formattedInput = inputString.toString().replace(/^(?:\/\/)(\D)(?:\\n)/, ''); // 숫자만 남기기
  } else {
    regex = /[:,]/;
    formattedInput = inputString.toString();
  }
  const splitString = formattedInput.split(regex);
  console.log(splitString); // ERROR 처리를 위한 확인

  const stringToNumber = splitString.map(Number);
  const compute = stringToNumber.reduce((acc, cur) => {
    return acc + cur;
  });

  return compute;
}

class App {
  async run() {
    try {
      const inputString = await getString();
      // 유효한 입력인지 확인
      const vaildInput = vaildateInput(inputString);
    } catch (error) {
      Console.print();
    }

    //const inputString = await getString();

    // 커스텀연산자가 있는지 확인
    const customString = customSeparator(inputString);
    console.log(customString);

    const computeReturn = computeResult(inputString, customString);
    Console.print(`결과 : ${computeReturn}`);
  }
}

export default App;
