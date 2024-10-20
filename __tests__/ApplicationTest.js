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

  test("예외 테스트1: 쉼표(,) 세미콜론(;) '//'와 '\\n' 외에 다른 특수 문자가 있는 경우", async () => {
    const inputs = ["1>2>3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트2: 한글 또는 알파벳이 있는 경우", async () => {
    const inputs = ["q,w,ㄱ"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트3: 커스텀 구분자를 기준으로 삼았을 때, 커스텀 구분자 외 다른 특수 문자가 있는 경우", async () => {
    const inputs = ["//;\n1>2;3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트4: 분리된 문자열에 음수가 있는 경우", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트5: 커스텀 구분자가 여러개인 경우", async () => {
    const inputs = ["//>\n1;2;//;\n1;2;3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트6: 커스텀 구분자가 문자열 앞이 아닌 부분에 오는 경우", async () => {
    const inputs = ["1;2;//;\n1;2;3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
