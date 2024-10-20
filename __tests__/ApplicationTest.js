import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

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

  test("예외 테스트", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  //테스트 케이스 추가 
  
  test("빈 문자열 입력", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 0"));
  });

  test("기본 구분자 쉼표와 콜론 사용", async () => {
    const inputs = ["1,2:3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 6"));
  });

  test("커스텀 구분자 사용", async () => {
    const inputs = ["//;\\n1;2;3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 6"));
  });

  test("커스텀 구분자와 기본 구분자 혼합 사용", async () => {
    const inputs = ["//;\\n1;2;3:4"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("결과 : 10"));
  });

  test("숫자가 아닌 문자가 포함된 경우", async () => {
    const inputs = ["1,2,a"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR] 숫자가 아닙니다.");
  });

  test("연속된 구분자 사용", async () => {
    const inputs = ["//;\\n1;;2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR] 연속된 구분자는 사용할 수 없습니다.");
  });

  test("지정되지 않은 구분자 사용", async () => {
    const inputs = ["1,2;3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR] 지정되지 않은 구분자가 사용되었습니다.");
  });
});
