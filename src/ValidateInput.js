import { Console } from "@woowacourse/mission-utils";

const ValidateInput = (input) => {
  if (input.includes('-')) {
    throw new Error('[ERROR] : 음수입니다.');
  }

  if (input.trim() === ''){
    Console.print('결과 : 0');
  }
}

export default ValidateInput;