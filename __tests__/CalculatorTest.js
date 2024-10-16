import App from "../src/App.js";

describe("문자열 계산기", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  describe("숫자 개수에 따른 덧셈", () => {
    test("2개의 숫자에 대해 덧셈이 가능하다.", async () => {
      expect(app.add([1, 2])).toBe(3);
    });
    
    test("3개의 숫자에 대해 덧셈이 가능하다.", async () => {
      expect(app.add([1, 2, 3])).toBe(6);
    });
  
    test("4개의 숫자에 대해 덧셈이 가능하다.", async () => {
      expect(app.add([1, 2, 3, 4])).toBe(10);
    });
  
    test("0개의 숫자는 0으로 처리한다.", async () => {
      expect(app.add([])).toBe(0);
    });
  })

  describe("구분자를 기준으로 문자열 분리", () => {
  })
});
