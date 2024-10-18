import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLine = jest.fn();

  MissionUtils.Console.readLine.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};
