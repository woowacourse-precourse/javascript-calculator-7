import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants.js';

async function readInput() {
  return await Console.readLineAsync(INPUT_MESSAGE);
}

export default readInput;
