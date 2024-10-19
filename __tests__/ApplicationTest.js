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

const simulateWithInput = async (inputs,expectedOutputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();

  const app = new App();
  await app.run();

  expectedOutputs.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
}

describe("문자열 계산기", () => {
  test("커스텀 구분자 사용", async () => {
    const inputs = ["//;\\n1"];
    const outputs = ["결과 : 1"];

    await simulateWithInput(inputs,outputs);
  });

  test("기본 구분자와 커스텀 구분자 동시 사용", async () => {
    const inputs = ["//;\\n1;2,3"];
    const outputs = ["결과 : 6"];

    await simulateWithInput(inputs,outputs);
  });

  test("예외 테스트", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
