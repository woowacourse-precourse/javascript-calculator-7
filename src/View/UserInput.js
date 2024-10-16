import { Console } from '@woowacourse/mission-utils';

const UserInput = async () => {
  const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
  return input;
};

export default UserInput;
