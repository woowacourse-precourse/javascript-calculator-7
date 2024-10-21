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

  test("숫자 하나만 있는 경우(크기 5 이하)", async () => {
    const inputs = ["100"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 100"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("숫자 하나만 있는 경우(크기 5 이상)", async () => {
    const inputs = ["100000"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 100000"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("기본 구분자만 있는 경우", async () => {
    const inputs = ["123:100,2222:111"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 2556"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 1개 있는 경우 (.)", async () => {
    const inputs = ["//.\\n123:1.333,11"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 468"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 여러 개 있는 경우", async () => {
    const inputs = ["//]\\n//(\\n//*\\n//-\\n123:14,22-1111*33"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 1303"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("음수 입력 시 예외 처리", async () => {
    const inputs = ["-12,212:3333"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("구분자 연달아 나올 경우 예외 처리", async () => {
    const inputs = ["992,,,222:2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("커스텀 구분자 안에 숫자가 들어갈 경우 예외 처리", async () => {
    const inputs = ["//8\\n1118:11,22"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("잘못된 커스텀 구분자 입력 시 예외 처리 1", async () => {
    const inputs = ["8//1:2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("잘못된 커스텀 구분자 입력 시 예외 처리 2", async () => {
    const inputs = ["8\\n1:22,11"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("숫자가 아닌 문자가 들어갈 경우 예외 처리", async () => {
    const inputs = ["111,rrr:22"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("커스텀 구분자가 아닌 문자가 잘못 들어간 경우 예외 처리", async () => {
    const inputs = ["//'\\n//-\\n123:123+111"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("커스텀 구분자만 있는 경우", async () => {
    const inputs = ["//+\\n"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 0"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자가 없을 경우 예외 처리", async () => {
    const inputs = ["//\\n123:111,12"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("커스텀 구분자 안에 공백이 있을 경우", async () => {
    const inputs = ["// \\n1223 111:22,11 2"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 1369"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("숫자 0이 포함된 경우", async () => {
    const inputs = ["//+\\n12:111,0+11"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 134"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("마지막에 구분자가 있을 경우 예외 처리", async () => {
    const inputs = ["123,222:"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("처음에 구분자가 있을 경우 예외 처리", async () => {
    const inputs = [":123,111"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("커스텀 구분자만으로 계산", async () => {
    const inputs = ["//]\\n122]111]222"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 455"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자가 2개 이상의 문자열일 경우", async () => {
    const inputs = ["//++\\n123++11,222:2"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("커스텀 구분자 안에 기본 구분자가 있을 경우", async () => {
    const inputs = ["//,\\n123,222:111"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 456"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 안에 문자가 있을 경우", async () => {
    const inputs = ["//t\\n123t222:111"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 456"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 규칙을 따르지 않는 경우", async () => {
    const inputs = ["//)/n123:22)1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

});
