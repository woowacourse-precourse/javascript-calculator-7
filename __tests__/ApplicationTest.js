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

  test("입력값이 없는 경우", async () => {
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

  test("두 자릿수 이상의 양수와 구분자 사용", async () => {
      const inputs = ["10,2:3"];
      mockQuestions(inputs);

      const logSpy = getLogSpy();
      const outputs = ["결과 : 15"];

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
      await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트2 - 올바르지 않은 연산자 사용", async () => {
    const inputs = ["1@2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  // 연산 규칙이 잘못된 경우
  test("예외 테스트3 - 최소 문자열 길이가 3 미만인 경우", async () => {
    const inputs = ["1,"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트4 - 마지막 문자가 양수가 아닌 경우", async () => {
    const inputs = ["11:"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트5 - 입력값이 양수만으로 구성된 경우", async () => {
    const inputs = ["123"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  // 커스텀 구분자의 지정값이 올바르지 않은 경우
  test("예외 테스트6 - 커스텀 구분자 값이 올바르지 않은 경우(양수 사용)", async () => {
    const inputs = ["//1\\n1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트7 - 커스텀 구분자 값이 올바르지 않은 경우(공백 사용)", async () => {
    const inputs = ["// \\n1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  // 구분자를 잘못 사용한 경우
  test("예외 테스트8 - 커스텀 구분자 값이 올바르지 않은 경우", async () => {
    const inputs = ["//1\\n1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트9 - 구분자를 연속으로 1번 이상 사용한 경우", async () => {
    const inputs = ["1::2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트10 - 지정한 커스텀 구분자 이외의 문자를 사용해 문자열을 입력한 경우", async () => {
    const inputs = ["//@\\n1#2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
