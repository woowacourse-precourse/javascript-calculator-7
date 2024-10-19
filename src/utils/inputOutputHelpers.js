import { Console } from '@woowacourse/mission-utils';

export const getInput = async () => {
  try {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요. \n'
    );
    return input;
  } catch (error) {
    console.error(error);
  }
};

export const printAnswer = (result) => {
  Console.print(`결과 : ${result}`);
};
