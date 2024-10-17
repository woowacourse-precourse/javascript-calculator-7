import { Console } from "@woowacourse/mission-utils";
import { messages } from "../ViewConstant/ViewConstants.js";
import { Validator } from "../validate/Validate.js";

export const viewUtils = {
  // 입력 받은 데이터를 반환하는 함수
  async inputData() {
    const { validateEntireForm } = Validator();
    const input = await Console.readLineAsync(messages.inputMessage);
    validateEntireForm(input);
    return input;
  },

  // 매개변수로 전달된 값을 콘솔에 출력하는 함수
  async outputData(output) {
    const { validateOutputForm } = Validator();
    validateOutputForm(output);
    return await Console.print(output);
  },

  // 에러 메세지를 콘솔에 출력하는 함수
  async errorMessage(err) {
    return await Console.print(`${messages.errorMessage} ${err}`);
  },
};
