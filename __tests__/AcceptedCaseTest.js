import App from "../src/App.js";
import { mockMultipleQuestions, expectResults } from "../src/utils/testUtils.js";

describe("허용되는 예외상황 테스트", () => {
  test("커스텀 구분자에 기존 구분자가 오는 경우 ", async () => {
    const inputs = ["//,\\n1,2,3,4", "//:\\n1:2:3:4:5"];
    mockMultipleQuestions(inputs);

    const outputs = ["결과 : 10", "결과 : 15"];

    const app = new App();
    await expectResults(app, outputs);
  });

  test("시작과 마지막에 숫자가 아닌 구분자가 오는 경우", async () => {
    const inputs = [",1,2,3", "1,2,3,4,"];
    mockMultipleQuestions(inputs);

    const outputs = ["결과 : 6", "결과 : 10"];

    const app = new App();
    await expectResults(app, outputs);
  });

  test("구분자를 제외하고 빈문자열이 주어지는 경우", async () => {
    const inputs = [",", "//;\\n;", "//;\\n;,:"];
    mockMultipleQuestions(inputs);

    const outputs = ["결과 : 0", "결과 : 0", "결과 : 0"];

    const app = new App();
    await expectResults(app, outputs);
  });

  test.only("숫자와 구분자만 입력된 경우", async () => {
    const inputs = ["1,2,3,4", "1:2:3:4"];
    mockMultipleQuestions(inputs);

    const outputs = ["결과 : 10", "결과 : 10"];

    const app = new App();
    await expectResults(app, outputs);
  });
});
