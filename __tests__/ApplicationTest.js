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

  test("예외 테스트", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  // Add Test
  test("예외 테스트 > 입력에 커스텀 구분자, 쉼표, 콜론 이외의 구분자가 포함된 경우", async () => {
    const inputs = ["//;\\n1;2,3~6"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 > 입력에 커스텀 구분자, 쉼표, 콜론 이외의 구분자가 포함된 경우", async () => {
    const inputs = ["1,2:3%9"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 > 잘못된 입력인 경우", async () => {
    const inputs = ["//;1;2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 > 잘못된 입력인 경우", async () => {
    const inputs = [";\\n1;2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 > 빈 문자열을 입력한 경우", async () => {
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

  test("커스텀 구분자를 갖는 문자열인지 여부를 확인한다.", async () => {
    const input = "//;\\n1;2;3";

    const app = new App();

    expect(app.isCustomSeparator(input)).toBe(true);
  });

  test("커스텀 구분자를 갖는 문자열인지 여부를 확인한다.", async () => {
    const input = "1,2:3";

    const app = new App();

    expect(app.isCustomSeparator(input)).toBe(false);
  });

  test("커스텀 구분자를 갖는 문자열인 경우, 커스텀 구분자를 파싱한다.", async () => {
    const input = "//;\\n1;2;3";
    const result = ";";

    const app = new App();

    expect(app.getCustomSeparator(input)).toBe(result);
  });

  test("커스텀 구분자를 갖는 문자열인 경우, 커스텀 구분자를 파싱한다.", async () => {
    const input = "//;\\n1;2;3";

    const app = new App();

    expect(app.getCustomSeparator(input)).toBe(";");
  });

  test("커스텀 구분자를 갖는 문자열인 경우, 커스텀 구분자를 제외한 문자열을 파싱한다.", async () => {
    const input = "//;\\n1;2;3";

    const app = new App();

    expect(app.parseStrWithCustomSeparator(input)).toBe("1;2;3");
  });

  test("구분자와 문자열을 인자로 전달받아 구분자를 기준으로 각 숫자를 분리한다.", async () => {
    const str = "1;2,3:5";
    const separators = [",", ":", ";"];

    const app = new App();

    expect(app.separateStr(str, separators)).toEqual(["1", "2", "3", "5"]);
  });

  test("분리한 각 숫자를 합한다.", async () => {
    const arr = ["1", "2", "3", "5"];

    const app = new App();

    expect(app.sum(arr)).toBe(11);
  });
});
