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

  test("올바른 입력값 테스트", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("일반 구분자를 커스텀 구분자로 사용", async () => {
    const inputs = ["//,\\n1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("연속된 구분자 사용", async () => {
    const inputs = ["1,2,,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("잘못된 구분자 위치", async () => {
    const inputs = [",1,2:3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("잘못된 커스텀 구분자 선언", async () => {
    const inputs = ["//,\\1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("길이가 2이상이거나 문자열이 아닌 커스텀 구분자 선언", async () => {
    const invalidInputs = [
      "//+-\\n1", // 길이가 2 이상인 구분자
      "//3\\n1", // 숫자가 구분자로 사용된 경우
    ];

    invalidInputs.forEach(async (input) => {
      mockQuestions([input]);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
  });
});
