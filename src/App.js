import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInput = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );

    const customSeparator = getCustomSeparator(userInput);
    const formattedUserInput = customSeparator
      ? userInput.replace(/^\/\/\D\\n/, '')
      : userInput;

    try {
      validateUserInput(customSeparator, formattedUserInput);
      const result = computeResult(customSeparator, formattedUserInput);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print('[ERROR]');
      throw error;
    }
  }
}

export default App;

export function getCustomSeparator(userInput) {
  const customSeparator = userInput.match(/^\/\/(\D)\\n/);

  return Array.isArray(customSeparator) && customSeparator.length
    ? customSeparator[1]
    : null;
}

export function validateUserInput(customSeparator, formattedUserInput) {
  const regex = customSeparator
    ? new RegExp(`\\s|^\\d+([,:${customSeparator}]\\d+)*$`)
    : /\s|^\d+([,:]\d+)*$/;

  if (!formattedUserInput.match(regex)) {
    throw new Error('[ERROR]');
  }
}

export function computeResult(customSeparator, formattedUserInput) {
  const regex = customSeparator
    ? new RegExp(`[:,${customSeparator}]`)
    : new RegExp(`[:,]`);

  const result = formattedUserInput
    .split(regex)
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);

  if (isNaN(result)) {
    throw new Error('[ERROR]');
  }

  return result;
}
