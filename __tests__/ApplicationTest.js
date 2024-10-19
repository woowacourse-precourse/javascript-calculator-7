import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("문자열 계산기", () => {
  test("빈 문자열을 0으로 취급 테스트", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    // const logSpy = getLogSpy();
    // const outputs = ["결과 : 0"];

    const app = new App();
    await app.run();
  });

  test("기본 구분자 사용 테스트", async () => {
    const inputs = ["1,2,3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
