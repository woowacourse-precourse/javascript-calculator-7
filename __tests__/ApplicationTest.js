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

  test("음수 입력", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["[ERROR] : 양수만 입력하세요"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("여러개의 커스텀 문자열 사용", async () => {
    const inputs = ["//;;;\\n1"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["[ERROR] : 커스텀 구분자는 한 글자만 사용할 수 있습니다."];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("구분자 사이에 값이 없음", async () => {
    const inputs = [",,,,,,1"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["[ERROR] : 구분자 사이에 값이 없습니다"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("입력값 없음", async () => {
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

  test("구분자가 숫자", async () => {
    const inputs = ["//2\\n1"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["[ERROR] : 커스텀 문자에 숫자는 사용할 수 없습니다."];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

});
