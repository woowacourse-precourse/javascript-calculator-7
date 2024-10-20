import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInput = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );

    const customSeparator = getCustomSeparator(userInput);

    try {
      validateUserInput(userInput, customSeparator);
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
  const customSeparator = userInput.match(/^\/\/(\D)\\n/);

  return Array.isArray(customSeparator) && customSeparator.length
    ? customSeparator[1]
    : null;
}

function validateUserInput(userInput, customSeparator) {
  const formattedUserInput = customSeparator
    ? userInput.replace(/^\/\/\D\\n/, '')
    : userInput;

  const regex = customSeparator
    ? new RegExp(`\\s|^\\d+([,:${customSeparator}]\\d+)*$`)
    : /^\s|\d+([,:]\d+)*$/;

  if (!formattedUserInput.match(regex)) {
    throw new Error('사용자 입력을 다시 하세요.');
  }
}

function computeResult(userInput, customSeparator) {
  const regex = customSeparator
    ? new RegExp(`[:,${customSeparator}]`)
    : new RegExp(`[:,]`);

  const formattedUserInput = customSeparator
    ? userInput.replace(/^\/\/\D\\n/, '')
    : userInput;

  return formattedUserInput
    .split(regex)
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
}
