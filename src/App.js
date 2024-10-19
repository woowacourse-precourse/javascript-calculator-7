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
    throw new Error('error occured');
  }
  console.log('커스텀 구분자');
}

function getCustomSeparator(userInput) {
  const customSeparator = userInput.match(/^(\/\/\D\\n)/);

  // TODO: 길이 1짜리 배열이 나올 가능성이 있는지 체크
  return Array.isArray(customSeparator) && customSeparator.length
    ? customSeparator[1]
    : null;
}

function computeResult(userInput, customSeparator) {
  const regex = customSeparator
    ? new RegExp(`[\\n:,${customSeparator}]`)
    : new RegExp(`/[:,]/`);

  const formattedUserInput = customSeparator
    ? userInput.replace(/^(?:\/\/)(\D)(?:\\n)/, '')
    : userInput;

  return formattedUserInput
    .split(regex)
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}

class App {
  async run() {
    const inputString = await getUserInputAsync();
    const customSeparator = getCustomSeparator(inputString);

    try {
      vaildateUserInput(inputString, customSeparator);
      console.log(customSeparator);

      const result = computeResult(inputString, customSeparator);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      console.error(error.message);
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
