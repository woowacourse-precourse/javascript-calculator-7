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
  test("기본 입력 테스트(쉼표)", async () => {
    const inputs = ["1,2,3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("기본 입력 테스트(콜론)", async () => {
    const inputs = ["1:2:3"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("기본 입력 테스트(쉼표, 콜론)", async () => {
    const inputs = ["1,2:3,4:5,6,7:11"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 39"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

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

  test("커스텀 구분자 사용 공백사용", async () => {
    const inputs = ["// \\n1 2 3 4"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 10"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 커스텀 구분자 잘못된 사용 (/를 사용)", async () => {
    const inputs = ["/;\\n1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 커스텀 구분자 잘못된 사용 (//가 없음)", async () => {
    const inputs = [";\\n1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 커스텀 구분자 잘못된 사용 (\\n가 없음)", async () => {
    const inputs = ["//;1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("커스텀 구분자 사용 두글자이상", async () => {
    const inputs = ["//abc\\n1abc2abc15abc2"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 20"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 입력 테스트(쉼표, 콜론, 커스텀)", async () => {
    const inputs = ["//;\\n1,2:3;4:5;6,7:11;12"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 51"];

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

  test("예외 테스트 등록 안된 구분자", async () => {
    const inputs = ["1,2-3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 등록 안된 구분자(공백)", async () => {
    const inputs = ["1,2 3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 커스텀 구분자 숫자", async () => {
    const inputs = ["//2\\n123"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 커스텀 구분자 숫자가 포함여부", async () => {
    const inputs = ["//a1c\\n1a1c"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
