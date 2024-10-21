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

  test("기본 구분자 사용", async () => {
    const inputs = ["1:2,3,"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  // 예외 테스트
  test("기본 구분자 예외 - 숫자가 음수일 경우", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR] 숫자는 양수만 허용됩니다.");
  });

  test("기본 구분자 예외 - 선언하지 않은 문자일 경우", async () => {
    const inputs = ["1,3,k"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR] 선언되지 않은 문자입니다. : k");
  });

  test("커스텀 구분자 예외 - 입력 문자열 맨 앞에 선언되지 않았을 경우", async () => {
    const inputs = ["3,4//a\\n"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR] 커스텀 구분자는 입력 문자열 맨 앞에 위치해야 합니다.");
  });

  test("커스텀 구분자 예외 - 커스텀 구분자로 빈 문자열을 사용했을 경우", async () => {
    const inputs = ["//\\n"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR] 빈 문자열은 커스텀 구분자로 사용할 수 없습니다.");
  });

  test("커스텀 구분자 예외 - 커스텀 구분자로 문자열을 사용했을 경우", async () => {
    const inputs = ["//abc\\n"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR] 문자열은 커스텀 구분자로 사용할 수 없습니다.");
  });

  test("커스텀 구분자 예외 - 커스텀 구분자로 입력한 문자가 숫자일 경우", async () => {
    const inputs = ["//3\\n"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR] 숫자는 커스텀 구분자로 사용할 수 없습니다.");
  });
});
