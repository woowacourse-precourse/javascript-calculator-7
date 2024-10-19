import { Console } from '@woowacourse/mission-utils';

function getUserInputAsync() {
  return Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
}

function vaildateUserInput(userInput, customString) {
  // TODO: 정규 표현식 리터럴로 바꾸기 버그 찾기
  const regex = customString
    ? new RegExp(
        `(\/\/${customString}\\n)?(\s|((\d+[:,${customString}]?)+(\d+))+$)`
      )
    : new RegExp(`\s|(\d+(([:,]\d+)+)?)$`);

  if (!userInput.match(regex)) {
    throw new Error('[ERROR]');
  }
  console.log('커스텀 구분자');
}

// 3. 커스텀구분자를 설정하는 기능
function customSeparator(inputString) {
  const regex = /^(\/\/\D\\n)/;
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
    const inputString = await getUserInputAsync();
    const customString = customSeparator(inputString);
    try {
      // 유효한 입력인지 확인
      vaildateUserInput(inputString);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
    // 커스텀연산자가 있는지 확인
    console.log(customString);

    const computeReturn = computeResult(inputString, customString);
    Console.print(`결과 : ${computeReturn}`);
  }
}

export default App;
