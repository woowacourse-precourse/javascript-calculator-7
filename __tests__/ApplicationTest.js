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

  test("단일 숫자 입력", async () => {
    const inputs = ["5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 5"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("쉼표와 콜론에 이은 커스텀 구분자 사용", async () => {
    const inputs = ["//[\n1[2,3:4"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 10"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("숫자가 아닌 값이 포함된 경우", async () => {
    const inputs = ["1,2,3,a"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["[ERROR] 숫자가 아닌 값이 포함되어 있습니다: a"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("음수가 포함된 경우", async () => {
    const inputs = ["1,2,-3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["[ERROR] 음수는 허용되지 않습니다: -3"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자가 맨 앞에 위치하지 않은 경우", async () => {
    const inputs = ["1,2,3//;\n4"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["[ERROR] 커스텀 구분자는 맨 앞에 위치해야 합니다."];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("구분자가 여러 번 사용된 경우", async () => {
    const inputs = ["1,2,3,,4"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["[ERROR] 구분자는 한 번만 사용할 수 있습니다."];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자를 여러 번 사용한 경우", async () => {
    const inputs = ["//;\n1;;2;3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["[ERROR] 구분자는 한 번만 사용할 수 있습니다."];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
