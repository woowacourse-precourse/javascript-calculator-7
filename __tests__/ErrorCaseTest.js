import App from "../src/App.js";
import { mockMultipleQuestions } from "../src/utils/testUtils.js";

describe("에러를 발생시키는 예외상황 테스트", () => {
  test("커스텀 구분자를 여러번 입력하는 경우 ", async () => {
    const inputs = ["//,\\n//d\\n1,2,3,4", "//,\\n1,2,3,4//d\\n"];
    mockMultipleQuestions(inputs);

    const app = new App();
    for (const _ of inputs) {
      await expect(app.run()).rejects.toThrow("[ERROR]");
    }
  });
  test("커스텀 구분자에 숫자를 입력하는 경우", async () => {
    const inputs = ["//1\\n1,2,3,4", "//0\\n1,2,3,4"];
    mockMultipleQuestions(inputs);

    const app = new App();
    for (const _ of inputs) {
      await expect(app.run()).rejects.toThrow("[ERROR]");
    }
  });
  test("커스텀 구분자와 구분자를 제외한 문자가 포함되는 경우", async () => {
    const inputs = ["//;\\n1d2e", "//q\\n1p2<3"];
    mockMultipleQuestions(inputs);

    const app = new App();
    for (const _ of inputs) {
      await expect(app.run()).rejects.toThrow("[ERROR]");
    }
  });
  test("구분자를 설정하는 문자열의 위치가 잘못된 경우", async () => {
    const inputs = ["1//;\\n1,2,3,4", "1;2,3,4//;\\n"];
    mockMultipleQuestions(inputs);

    const app = new App();
    for (const _ of inputs) {
      await expect(app.run()).rejects.toThrow("[ERROR]");
    }
  });
  test("구분자를 설정하는 문자열이 완전하지 않은 경우", async () => {
    const inputs = ["//;1,2,3,4", ";\\n1;2,3,4"];
    mockMultipleQuestions(inputs);

    const app = new App();
    for (const _ of inputs) {
      await expect(app.run()).rejects.toThrow("[ERROR]");
    }
  });
  test("구분자의 길이가 1이 아닌 경우", async () => {
    const inputs = ["//;;\\n1;;2;;3;;4", "//dd\\n1dd2dd3dd4"];
    mockMultipleQuestions(inputs);

    const app = new App();
    for (const _ of inputs) {
      await expect(app.run()).rejects.toThrow("[ERROR]");
    }
  });
  test("더할 값에 양의 정수가가 아닌 값이 입력된 경우", async () => {
    const inputs = ["-1,0,1", "0.5,-0.5"];
    mockMultipleQuestions(inputs);

    const app = new App();
    for (const _ of inputs) {
      await expect(app.run()).rejects.toThrow("[ERROR]");
    }
  });
});
