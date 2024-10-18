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
  // 초기 test case
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

  // 초기 test case
  test("예외 테스트", async () => {
    const inputs = ["-1,2,3"];
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

    const app = new App();

    await expect(app.run()).rejects.toThrow(); // toThrow()는 에러가 발생했는지 확인하는 메서드
  });

  test("음수가 포함된 경우", async () => {
    const inputs = ["1,2,-3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow();
  });

  test("커스텀 구분자가 맨 앞에 위치하지 않은 경우", async () => {
    const inputs = ["1,2,3//;\n4"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow();
  });

  test("구분자가 여러 번 사용된 경우", async () => {
    const inputs = ["1,2,3,,4"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow();
  });

  test("커스텀 구분자를 여러 번 사용한 경우", async () => {
    const inputs = ["//;\n1;;2;3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow();
  });
});
