import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInput = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    const customSeparator = getCustomSeparator(userInput);

    try {
      vaildateUserInput(userInput, customSeparator);

      const result = computeResult(userInput, customSeparator);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`); // 스택 트레이스가 안 뜸
      // throw new Error(`[ERROR] ${error.message}`); // 스택 트레이스가 뜸
    }
  }
}

export default App;

function getCustomSeparator(userInput) {
  const customSeparator = userInput.match(/^(\/\/\D\\n)/);

  // TODO: 길이 1짜리 배열이 나올 가능성이 있는지 체크
  return Array.isArray(customSeparator) && customSeparator.length
    ? customSeparator[1]
    : null;
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
