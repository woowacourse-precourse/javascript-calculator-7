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

const runTest = async (inputs, outputs) => {
  mockQuestions(inputs, outputs);
  const logSpy = getLogSpy();

  const app = new App();
  await app.run();

  outputs.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
};

const runError = async (inputs) => {
  mockQuestions(inputs);

  const app = new App();
  await expect(app.run()).rejects.toThrow("[ERROR]");
};

describe("문자열 계산기", () => {
  test("기본 구분자 사용", async () => {
    await runTest(["1,2,3"], ["결과 : 6"]);
    await runTest(["1,2:3"], ["결과 : 6"]);
    await runTest(["01,2:003"], ["결과 : 6"]);
  });
  test("커스텀 구분자 사용", async () => {
    await runTest(["//?\\n1?2?3"],["결과 : 6"]); // 특수 문자
    await runTest(["// \\n1 2 3"],["결과 : 6"]); // 공백
    await runTest(["//a\\n1a2a3"],["결과 : 6"]); // 알파벳
    await runTest(["//\n\\n1\n2\n3"],["결과 : 6"]); // \n
    await runTest(["//\\\\n1\\2\\3"],["결과 : 6"]); // 백슬래시
    await runTest(["//!\\n1!2,3"],["결과 : 6"]); // 기본 구분자와 혼합
  });
  test("빈 문자", async () => {
    await runTest([""], ["결과 : 0"]);
    await runTest(["//;\\n"], ["결과 : 0"]);
  });
  test("숫자 한개", async () => {
    await runTest(["1"], ["결과 : 1"])
  });
  test("에러: 음수 입력", async () => {
    await runError(["-1,2:3"]);
    await runError(["//?\\n1?2?-3"]);
  });
  test("에러: 시작과 끝이 숫자가 아닐때", async () => {
    await runError(["1,2:3,"]);
    await runError(["1,2:3  "]);
    await runError(["//?\\n?1?2?3"]);
  });
  test("에러: 커스텀 구분자", async () => {
    await runError(["//??\\n1??2??3"]); // 커스텀 구분자 2자
    await runError(["//\\n123"]); // 커스텀 구분자 없음
    await runError(["//!\\n1!2?3"]); // 커스텀 구분자 이외 사용
  });
  test("에러: 구분자 연속 사용", async () => {
    await runError(["1::2,,3"]);
    await runError(["//?\\n1??2??3"]);
  });
  test("에러: 공백 포함", async () => {
    await runError(["1, 2:3"]);
    await runError(["//?\\n1? 2? 3"]);
  });
  test("에러: 구분자, 숫자 이외 사용", async () => {
    await runError(["1,abc2:3"]);
    await runError(["//?\\n1?v2?k3"]);
  });
});