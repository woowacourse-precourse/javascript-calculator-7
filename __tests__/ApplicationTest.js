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

  test("1. 기본 구분자','만 사용 - (1,2,3 = 6)", async () => {
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
  test("2. 기본 구분자':'만 사용 - (1:2:13 = 16)", async () => {
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

  test("3. 기본 구분자','와 ':' 사용 - (1,2:3,100:1 = 107)", async () => {
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

  test("4. 커스텀 구분자 추가 - (//;\\n1;2;3 = 6)", async () => {
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

  test("5. 커스텀 구분자 추가와 기본 구분자 사용 - (//;\\n1;2,3 = 6)", async () => {
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

  test("6. 숫자를 커스텀 구분자로 했을 때 - (//2\\n1232526 = 15)", async () => {
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
  test("7. 커스텀 구분자에 숫자를 여러개 넣었을 때 - (//234\\n1253141 = 8)", async () => {
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
  test("8. 커스텀 구분자를 여러개 넣었을 때 - (//;.\\n1;2.3:4,5 = 15)", async () => {
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
  test("9. 커스텀 구분자를 여러개(숫자 + 기호) 넣었을 때 - (//;.78\\n1;273:4,581 = 16)", async () => {
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

  test("10. 같은 커스텀 구분자 여러개 넣었을때 하나로 처리 - (//;;;;7;;77\\n1;273:5,6 = 17)", async () => {
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
  test("11. 커스텀 구분자 공백 처리 - (// \\n1 2 3 = 6)", async () => {
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
  test("12. 문자열에 공백이 있을 때 - (//;\\n1;    2  ,   3 = 6)", async () => {
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

  test("13. 문자열에 양의 실수가 있을 때 - (//;\\n1.12,3;4 = 8.12)", async () => {
    const inputs = ["//;\\n1.12,3;4"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 8.12"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("14. 구분자로 '.'이 사용될 때 - (//.\\n1.1:2,3 = 7)", async () => {
    const inputs = ["//.\\n1.1:2,3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 7"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("15. 구분자로 백슬래시 이스케이프가 사용될 떄 - (//\\\\n1:2\\3 = 6)", async () => {
    const inputs = ["//\\\\n1:2\\3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("16. 구분자로 백슬래시 이스케이프와 다른 구분자들이 사용될 떄 - (//\\. \\n1:2\\3 4.1 = 11)", async () => {
    const inputs = ["//\\. \\n1:2\\3 4.1"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 11"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("17. 커스텀 구분자를 아무것도 입력하지않았을 때 - (//\\n3,4:5 = 12)", async () => {
    const inputs = ["//\\n3,4:5"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const outputs = ["결과 : 12"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("18. 기본 구분자',' 사용 및 음수 - (1,-2,3 = [ERROR])", async () => {
    const inputs = ["1,-2,3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("19. 기본 구분자':' 사용 및 음수 - (1:-2:3 = [ERROR])", async () => {
    const inputs = ["1:-2:3"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("20. 기본 구분자','와 ':' 사용 및 음수 사용 - (1,2:3,-100:1:-10 = [ERROR])", async () => {
    const inputs = ["1,2:3,-100:1:-10"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("21. 잘못된 입력 형식: 숫자 아닌 문자 포함 - (1,a,3 = [ERROR])", async () => {
    const inputs = ["1,a,3"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("22. 커스텀 구분자 사용 후 잘못된 형식의 숫자 - (//;\\n1;-2;3 = [ERROR])", async () => {
    const inputs = ["//;\\n1;-2;3"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("23. 구분자를 연속 사용했을 때 - (//.\\n3....3 = [ERROR])", async () => {
    const inputs = ["//.\\n3....3"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("24. 최대값 제한 : 천만 이하만 더하기 - (//.\\n1.5.6:10000001 = [ERROR])", async () => {
    const inputs = ["//.\\n1.5.6:10000001"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("25. 문자열이 숫자로 끝나지 않을 때 - (//.\\n1.5.6: = [ERROR])", async () => {
    const inputs = ["//.\\n1.5.6:"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("26. 빈 문자열 입력", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("27. 스페이스만 입력", async () => {
    const inputs = ["   "];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
