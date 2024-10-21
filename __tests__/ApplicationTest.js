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

  test("예외 테스트 - 음수 입력", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 공백 포함", async () => {
    const inputs = ["1 ,2,3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 숫자, 구분자 외의 문자 포함", async () => {
    const inputs = ["1,a,2"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 잘못된 커스텀 구분자", async () => {
    const inputs = ["//;\\1,2;3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 커스텀 구분자가 숫자인 경우", async () => {
    const inputs = ["//1\\n1,2,3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 커스텀 구분자가 여러 개인 경우", async () => {
    const inputs = ["//;;\\n1;2;3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 구분자가 없는 경우", async () => {
    const inputs = ["//\\n1,2,3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
