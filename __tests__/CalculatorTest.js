import App from "../src/App.js";

describe("문자열 계산기", () => {
  test("2개의 숫자에 대해 덧셈이 가능하다.", async () => {

    const app = new App();

    expect(app.add([1, 2])).toBe(3);
  });
});
