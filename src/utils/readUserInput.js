import { Console } from '@woowacourse/mission-utils';

export async function readUserInput(message) {
  try {
    const input = await Console.readLineAsync(`${message}\n`);
    return input;
  } catch (error) {
    throw new Error('잘못된 입력이에요.');
  }
}
