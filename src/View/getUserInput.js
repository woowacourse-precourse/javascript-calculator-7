import { Console } from '@woowacourse/mission-utils';

const getUserInput = async () => {
  const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요. : ');
  return input;
};

export default getUserInput;
