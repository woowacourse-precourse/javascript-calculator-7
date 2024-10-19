import App from "../src/App.js";
import { Console } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("문자열 계산기", () => {
  test("기본 구분자 사용", async () => {
    const inputs = ["1,2:3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => {
    const inputs = ["//;\n1;2;3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("빈 문자열 처리", async () => {
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

  test("숫자가 아닌 입력 처리", async () => {
    const inputs = ["1,b,c"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 숫자 이외의 값이 포함되어 있습니다."
    );
  });

  test("음수 입력 처리", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 양수 이외의 값이 포함되어 있습니다."
    );
  });

  test("구분자 사이에 숫자가 없는 경우", async () => {
    const inputs = ["1::3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 구분자 사이에 숫자가 없습니다."
    );
  });

  test("잘못된 커스텀 구분자 형식", async () => {
    const inputs = ["//\n1:2:3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 잘못된 커스텀 구분자 형식입니다."
    );
  });

  test("허용되지 않은 구분자 사용", async () => {
    const inputs = ["1!2@3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 허용되지 않은 구분자가 사용되었습니다."
    );
  });

  test("커스텀 구분자 지정 후 숫자 생략", async () => {
    const inputs = ["//;\n"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 덧셈할 숫자가 없습니다.");
  });

  test("숫자 범위 초과", async () => {
    const inputs = ["1,9007199254740992"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 숫자가 허용된 범위를 초과했습니다."
    );
  });

  test("예외 테스트", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
