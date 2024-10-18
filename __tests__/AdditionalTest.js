import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

// 입력값을 mock하는 함수
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

// 콘솔 출력 기록을 mock하는 함수
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("예외 테스트 케이스", () => {
  test("여러 개의 커스텀 구분자 입력", async () => {
    const inputs = ["//;\\n//#\\n1#2;3,4.5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 10.5"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("커스텀 구분자가 두 글자 이상", async () => {
    const inputs = ["//;;\\n1;;2;;3,4.5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 10.5"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("예외 테스트", async () => {
    const inputs = ["//;;\\n1;2;;3,4.5"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  

  test("빈 문자열 입력", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 0"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
