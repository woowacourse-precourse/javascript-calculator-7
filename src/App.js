import { Console } from '@woowacourse/mission-utils';

function getUserInputAsync() {
  return Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
}

function vaildateUserInput(userInput, customSeparator) {
  // TODO: 정규 표현식 리터럴로 바꾸기 버그 찾기
  const regex = customSeparator
    ? new RegExp(
        `(\/\/${customSeparator}\\n)?(\s|((\d+[:,${customSeparator}]?)+(\d+))+$)`
      )
    : new RegExp(`\s|(\d+(([:,]\d+)+)?)$`);

  if (!userInput.match(regex)) {
    throw new Error('[ERROR]');
  }
  console.log('커스텀 구분자');
}

function getCustomSeparator(inputString) {
  const customSeparator = inputString.match(/^(\/\/\D\\n)/);

  // TODO: 길이 1짜리 배열이 나올 가능성이 있는지 체크
  return Array.isArray(customSeparator) && customSeparator.length
    ? customSeparator[1]
    : null;
}

// 2. :나 , 커스텀 구분자로 구분된 문자열의 합 반환
function computeResult(inputString, customSeparator) {
  let regex;
  let formattedInput;
  if (customSeparator) {
    regex = new RegExp(`[\\n:,${customSeparator}]`);
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
    const customSeparator = getCustomSeparator(inputString);
    try {
      // 유효한 입력인지 확인
      vaildateUserInput(inputString, customSeparator);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
    // 커스텀연산자가 있는지 확인
    console.log(customSeparator);

    const computeReturn = computeResult(inputString, customSeparator);
    Console.print(`결과 : ${computeReturn}`);
  }
}

export default App;
