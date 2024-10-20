import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE_ERROR_OUTPUT, ERROR_MESSAGES, ERROR_CODES } from "../src/constants/constants.js";

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

describe("기본 구분자만 사용", () => {
  test("빈 문자열인 경우", async () => {
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

  test("숫자가 하나만 있는 경우", async () => {
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

  test("콤마(,)만 있는 경우", async () => {
    const inputs = ["1,2,3,4,5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 15"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("콜론(:)만 있는 경우", async () => {
    const inputs = ["10:20:30"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 60"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("콤마(,), 콜론(:) 모두 있는 경우", async () => {
    const inputs = ["5,10:15,20:25"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 75"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("숫자 0이 포함된 경우", async () => {
    const inputs = ["0,10:20,0"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 30"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("숫자가 중복되는 경우", async () => {
    const inputs = ["10:10,10:10"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 40"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("두 자리 이상의 숫자가 포함된 경우", async () => {
    const inputs = ["1:10:100:1000,2,20,200"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 1333"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("입력값이 매우 긴 경우", async () => {
    const inputs = ["1,2,3:4,5:6,7,8,9:10,11,12,13:14,15:16,17:18,19,20:21,22,23,24:25,26,27,28,29,30"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 465"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe("기본 및 커스텀 구분자 사용", () => {
  test("커스텀 구분자(세미콜론 ;)", async () => {
    const inputs = ["//;\\n1;2,3:4"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 10"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(공백 문자 ‘ ‘)", async () => {
    const inputs = ["// \\n6 7,8:9"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 30"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(괄호 ())", async () => {
    const inputs = ["//(\\n7(8,9:10"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 34"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(중괄호 {})", async () => {
    const inputs = ["//}\\n6}7}8,9:10"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 40"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(대괄호 [])", async () => {
    const inputs = ["//]\\n2]3,4:5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 14"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(언더바 _)", async () => {
    const inputs = ["//_\\n100_200,300:400"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 1000"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(별표 *)", async () => {
    const inputs = ["//*\\n1*2*3,4:5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 15"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(해시 기호 #)", async () => {
    const inputs = ["//#\\n5#10,15:20"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 50"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(물결표 ~)", async () => {
    const inputs = ["//~\\n1~2~3,4:5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 15"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(달러 기호 $)", async () => {
    const inputs = ["//$\\n10$20,30:40"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 100"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(파이프 |)", async () => {
    const inputs = ["//|\\n1|2|3,4:5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 15"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(퍼센트 %)", async () => {
    const inputs = ["//%\\n5%10%15,20:25"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 75"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(앤퍼샌드 &)", async () => {
    const inputs = ["//&\\n1&2&3,4:5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 15"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(앳 기호 @)", async () => {
    const inputs = ["//@\\n2@3@4,5:6"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 20"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(백틱 `)", async () => {
    const inputs = ["//`\\n7`8`9,10:11"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 45"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(작은 따옴표 ')", async () => {
    const inputs = ["//'\\n1'2'3,4:5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 15"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(작은 부등호 <)", async () => {
    const inputs = ["//<\\n5<10<15,20:25"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 75"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(물음표 ?)", async () => {
    const inputs = ["//?\\n1?2?3,4:5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 15"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(슬래시 /)", async () => {
    const inputs = ["///\\n1/2/3,4:5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 15"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(역슬래시 \\)", async () => {
    const inputs = ["//\\\\n1\\2,3:4"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 10"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(캐럿 ^)", async () => {
    const inputs = ["//^\\n1^2^3,4:5"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 15"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(등호 =)", async () => {
    const inputs = ["//=\\n6=7=8,9:10"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 40"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(더하기 +)", async () => {
    const inputs = ["//+\\n10+20+30,40:50"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 150"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자(빼기 -)", async () => {
    const inputs = ["//-\\n10-20-30,40:50"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 150"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 선언만 하고 사용하지 않는 경우", async () => {
    const inputs = ["//;\\n123,456"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 579"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 선언하고 모든 구분자를 사용하지 않는 경우", async () => {
    const inputs = ["//;\\n123456"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 123456"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 선언하고 숫자 하나만 있는 경우", async () => {
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
});

describe("예외 테스트 모음", () => {
  test("음수가 포함된 경우 (1)", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.LEADING_TRAILING_CHARACTER]}`);
  });

  test("음수가 포함된 경우 (2)", async () => {
    const inputs = ["1,-2:3,4"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.UNDEFINED_DELIMITER]}`);
  });

  test("문자열 끝에 공백이 있는 경우", async () => {
    const inputs = ["//;\\n1;2;3 "];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.LEADING_TRAILING_CHARACTER]}`);
  });

  test("커스텀 구분자 선언 시 ‘\\n’을 빠뜨린 경우", async () => {
    const inputs = ["//;123,456"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.INVALID_CUSTOM_DELIMITER]}`);
  });

  test("커스텀 구분자가 비어있는 경우", async () => {
    const inputs = ["//\\n1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.EMPTY_CUSTOM_DELIMITER]}`);
  });

  test("커스텀 구분자가 하나 이상인 경우", async () => {
    const inputs = ["//;#@\\n5;10#15@20,25:30"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.MULTIPLE_CUSTOM_DELIMITERS]}`);
  });

  test("커스텀 구분자로 숫자가 사용된 경우", async () => {
    const inputs = ["//1\\n1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.NUMERIC_CUSTOM_DELIMITER]}`);
  });

  test("커스텀 구분자 선언 뒤에 문자가 사용된 경우", async () => {
    const inputs = ["//;\\na1;2;3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.INVALID_CHARACTER_AFTER_CUSTOM_DELIMITER]}`);
  });

  test("커스텀 구분자 선언 뒤에 구분자가 사용된 경우", async () => {
    const inputs = ["//;\\n;1;2;3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.INVALID_CHARACTER_AFTER_CUSTOM_DELIMITER]}`);
  });

  test("정의되지 않은 구분자가 사용된 경우", async () => {
    const inputs = ["1|2|3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.UNDEFINED_DELIMITER]}`);
  });

  test("구분자가 여러 번 연속으로 등장하는 경우", async () => {
    const inputs = ["1,,2:::3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.CONSECUTIVE_DELIMITERS]}`);
  });

  test("숫자 사이에 공백이 있는 경우", async () => {
    const inputs = ["10 , 20 : 30"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.UNDEFINED_DELIMITER]}`);
  });

  test("구분자만 있는 경우", async () => {
    const inputs = [",,:"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`${MESSAGE_ERROR_OUTPUT} ${ERROR_MESSAGES[ERROR_CODES.LEADING_TRAILING_CHARACTER]}`);
  });
});