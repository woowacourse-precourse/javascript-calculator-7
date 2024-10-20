import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import { ERROR_HEADER, INPUT_MESSAGE, RESULT_MESSAGE } from "../src/constants";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getConsoleSpy = () => jest.spyOn(MissionUtils.Console, "readLineAsync");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Input 클래스", () => {
  test("입력 안내 메시지 출력", async () => {
    const inputs = ["//;\\n1"];
    mockQuestions(inputs);

    const app = new App();
    await app.run();

    const spy = getConsoleSpy();
    expect(spy).toHaveBeenCalledWith(INPUT_MESSAGE);
  });
});

describe("문자열 계산기", () => {
  test("커스텀 구분자 사용", async () => {
    const inputs = ["//;\\n1"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = [`${RESULT_MESSAGE}1`];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_HEADER);
  });
});
