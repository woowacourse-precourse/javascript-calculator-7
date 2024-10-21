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
  test("커스텀 구분자 사용", async () => {
    const inputs = ["//;\\n1"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 1"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 미사용 -> 콜론(:) 사용", async () => {
    const inputs = ["2:8:31"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 41"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트 -> 입력 값에 음수 포함", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR]: 배열의 요소에 0 혹은 음수가 있습니다."
    );
  });

  test("예외 테스트 -> 입력 값에 0 포함", async () => {
    const inputs = ["1,0,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR]: 배열의 요소에 0 혹은 음수가 있습니다."
    );
  });
});
