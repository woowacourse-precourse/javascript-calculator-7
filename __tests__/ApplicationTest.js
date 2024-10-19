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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("1. ',' 사용", async () => {
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
  test("2. ':' 사용", async () => {
    const inputs = ["1:2:13"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 16"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("3. ',' 사용 및 음수", async () => {
    const inputs = ["1,-2,3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("4. ':' 사용 및 음수", async () => {
    const inputs = ["1:-2:3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("5. ',', ':' 사용", async () => {
    const inputs = ["1,2:3,100:1"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 107"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("6. ',', ':' 사용 및 음수", async () => {
    const inputs = ["1,2:3,-100:1:-10"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("7. 커스텀 구분자 사용", async () => {
    const inputs = ["//;\\n1;2;3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("8. 커스텀 구분자와 기본 구분자 혼합 사용", async () => {
    const inputs = ["//;\\n1;2,3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("9. 잘못된 입력 형식: 숫자 아닌 문자 포함", async () => {
    const inputs = ["1,a,3"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("10. 커스텀 구분자 사용 후 잘못된 형식의 숫자", async () => {
    const inputs = ["//;\\n1;-2;3"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("11. 빈 문자열 입력", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("12. 스페이스만 입력", async () => {
    const inputs = ["   "];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("13. 숫자를 커스텀 구분자로 했을 때", async () => {
    const inputs = ["//2\\n1232526"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 15"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("14. 커스텀 구분자에 숫자를 여러개 넣었을때", async () => {
    const inputs = ["//234\\n1253141"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 8"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("15. 커스텀 구분자를 여러개 넣었을때", async () => {
    const inputs = ["//;.\\n1;2.3:4,5"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 15"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("16. 커스텀 구분자를 여러개(숫자 + 기호) 넣었을때", async () => {
    const inputs = ["//;.78\\n1;273:4,581"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 16"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("17. 구분자를 연속 사용했을때", async () => {
    const inputs = ["//.\\n3....3"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("18. 최대값 제한 : 100000만 이하만 더하기", async () => {
    const inputs = ["//.\\n1.5.6:100001"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("19. 같은 커스텀 구분자 여러개 넣었을때 하나로 처리", async () => {
    const inputs = ["//;;;;7;;77\\n1;273:5,6"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 17"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("20. 커스텀 구분자 공백 처리", async () => {
    const inputs = ["// \\n1 2 3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("21. 문자열에 공백이 있을 때", async () => {
    const inputs = ["//;\\n1;    2  ,   3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("22. 문자열이 숫자로 끝나지 않을때", async () => {
    const inputs = ["//.\\n1.5.6:"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
