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

  test("커스텀 구분자 사용", async () => { // 커스텀 구분자가 문자열일 때 
    const inputs = ["//pp\\n1pp2"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 3"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => { // 커스텀 구분자가 문자열이고 여러 개일때  (p,pp)
    const inputs = ["//p\\n1p2p//pp\\n1pp2"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => { // 커스텀 구분자가 특수문자일 때
    const inputs = ["//*\\n1*2"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 3"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => { // 커스텀 구분자가 특수문자이며 길이가 2이상일떄
    const inputs = ["//**\\n1**2"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 3"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => { // 커스텀 구분자가 특수문자이며 종류가 여러 개
    const inputs = ["//**\\n1**2**//*\\n1*2"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => { // 커스텀 구분자가 특수문자+문자열 일때
    const inputs = ["//**\\n1**2**//p\\n1p2"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 6"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => {   // 커스텀 구분자 + 소수가 포함될 때
    const inputs = ["//;\\n1.5;2.5"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 4"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });


  test("커스텀 구분자 사용", async () => {   // 빈 문자열일 떄
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

  test("커스텀 구분자 사용", async () => {   // 커스텀 구분자가 빈 문자열일 경우
    const inputs = ["// \\n1 2"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 3"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => {   // 기본 구분자와 커스텀 구분자가 같이 있을 때
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

  test("커스텀 구분자 사용", async () => {   // 구분자가 숫자일 때
    const inputs = ["//3\\n13234"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 7"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => {   // 커스텀 구분자를 뺐을 때 빈문자열이 나오는 경우 
    const inputs = ["////\\n///\\n"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 0"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => {   // 구분자가 /일 때
    const inputs = ["///\\n1/2"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 3"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => {   // 구분자가 //일 때
    const inputs = ["////\\n1//2"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 3"];

    const app = new App();
    await app.run();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => {   // 구분자가 ///일 때
    const inputs = ["/////\\n1///2"]; 
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const outputs = ["결과 : 3"];

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

  test("예외 테스트", async () => { // 공백문자가 있을때
    const inputs = ["1,2,3, ''"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트", async () => { // 다른 문자열이 들어가있을 떄
    const inputs = ["1,2,3,;"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트", async () => { // 숫자 끝에 소수점이 들어갔을 때
    const inputs = ["1,2,3."];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
