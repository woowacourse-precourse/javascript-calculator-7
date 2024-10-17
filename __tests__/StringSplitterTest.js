import App from "../src/App";
import { getLogSpy, mockQuestions } from "./ApplicationTest";

describe("문자열 구분", () => {
  test("커스텀 구분자 설정 부분이 없을 때 false를 반환하는 지 확인", async () => {
    const inputs = ["//;\\1"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const output = false;

    const app = new App();
    await app.run();

    inputs.forEach(() => {
      expect(logSpy).toBe(output);
    });
  });

  test("커스텀 구분자 설정 부분이 있을 때 true를 반환하는 지 확인", async () => {
    const inputs = ["//;\\n1"];
    mockQuestions(inputs);

    const logSpy = getLogSpy();
    const output = true;

    const app = new App();
    await app.run();

    inputs.forEach(() => {
      expect(logSpy).toBe(output);
    });
  });
});
