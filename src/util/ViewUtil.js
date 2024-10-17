import { Console } from "@woowacourse/mission-utils";
import { messages } from "../ViewConstant/ViewConstants.js";

export const viewUtils = () => {
  // 입력 받은 데이터를 반환하는 함수
  const inputData = async () => {
    const input = await Console.readLineAsync(messages.inputMessage);
    // TODO : InputForm Validate
    return input;
  };

  // 매개변수로 전달된 값을 콘솔에 출력하는 함수
  const outputData = async (data) => {
    // TODO : OutputForm Validate
    return await Console.print(data);
  };

  // 에러 메세지를 콘솔에 출력하는 함수
  const errorMessage = async (err) => {
    return await outputData(`${messages.errorMessage} ${err}`);
  };
  return { inputData, outputData, errorMessage };
};
