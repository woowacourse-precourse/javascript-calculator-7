import App from "../src/App";
// 테스트에 필요한 모듈 불러오기
const MissionUtils = require("@woowacourse/mission-utils");

// 입력을 모킹하기 위한 함수
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementation((message, callback) => {
    const input = inputs.shift(); // 입력 배열에서 첫 번째 값 가져오기
    callback(input); // 가져온 값을 콜백으로 넘기기
  });
};

// 출력 (print) 를 모킹하기 위한 함수
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear(); // 로그 초기화
  return logSpy;
};

describe("문자열 계산기", () => {
  test("커스텀 구분자 사용", async () => {
    const inputs = ["//*\n1*2*3"]; // 커스텀 구분자 ; 사용
    mockQuestions(inputs); // 입력 모킹

    const logSpy = getLogSpy(); // 출력 모킹
    const outputs = ["결과 : 6"]; // 예상 출력값

    const app = new App();
    await app.run(); // App 실행

    // 출력값이 예상한 대로 나오는지 확인
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커스텀 구분자 사용", async () => {
    const inputs = ["//;\n1"]; // 커스텀 구분자 ; 사용
    mockQuestions(inputs); // 입력 모킹

    const logSpy = getLogSpy(); // 출력 모킹
    const outputs = ["결과 : 1"]; // 예상 출력값

    const app = new App();
    await app.run(); // App 실행

    // 출력값이 예상한 대로 나오는지 확인
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("기본 구분자 (콤마, 콜론) 사용", async () => {
    const inputs = ["1,2:3"]; // 기본 구분자 , 및 : 사용
    mockQuestions(inputs); // 입력 모킹

    const logSpy = getLogSpy(); // 출력 모킹
    const outputs = ["결과 : 6"]; // 예상 출력값

    const app = new App();
    await app.run(); // App 실행

    // 출력값이 예상한 대로 나오는지 확인
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("잘못된 커스텀 문자가 입력된 경우", async () => {
    const inputs = ["//**\n1*2*3"]; // 커스텀 구분자 두 개 사용
    mockQuestions(inputs); // 입력 모킹

    const app = new App();

    // 커스텀 구분자 입력 시 예외 발생하는지 확인
    await expect(app.run()).rejects.toThrow(
      "[Error] 커스텀 구분자는 하나만 입력 가능합니다."
    );
  });

  test("음수 입력 예외 테스트", async () => {
    const inputs = ["-1,2,3"]; // 음수 입력
    mockQuestions(inputs); // 입력 모킹

    const app = new App();

    // 음수 입력 시 예외 발생하는지 확인
    await expect(app.run()).rejects.toThrow(
      "[Error] 음수는 입력할 수 없습니다"
    );
  });

  test("정수가 아닌 입력 예외 테스트", async () => {
    const inputs = ["1,2,three"]; // 정수가 아닌 입력
    mockQuestions(inputs); // 입력 모킹

    const app = new App();

    // 정수가 아닌 값 입력 시 예외 발생하는지 확인
    await expect(app.run()).rejects.toThrow("[Error] 숫자만 입력 가능합니다.");
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

  test("예외 테스트", async () => {
    const inputs = ["-1,2,3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[Error] 음수는 입력할 수 없습니다"
    );
  });
});
