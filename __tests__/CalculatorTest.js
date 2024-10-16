import App from "../src/App.js";

describe("문자열 계산기", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  describe("숫자 개수에 따른 덧셈", () => {
    test("2개의 숫자에 대해 덧셈이 가능하다.", () => {
      expect(app.add([1, 2])).toBe(3);
    });
    
    test("3개의 숫자에 대해 덧셈이 가능하다.", () => {
      expect(app.add([1, 2, 3])).toBe(6);
    });
  
    test("4개의 숫자에 대해 덧셈이 가능하다.", () => {
      expect(app.add([1, 2, 3, 4])).toBe(10);
    });
  
    test("0개의 숫자는 0으로 처리한다.", () => {
      expect(app.add([])).toBe(0);
    });
  })

  describe("기본 구분자를 기준으로 문자열 분리", () => {
    test("쉼표(,) 구분자를 기준으로 문자열을 분리한다.", () => {
      expect(app.splitStringByDelimiter("1,2", [","])).toEqual(["1", "2"]);
    });

    test("콜론(:) 구분자를 기준으로 문자열을 분리한다.", () => {
      expect(app.splitStringByDelimiter("1:2", [":"])).toEqual(["1", "2"]);
    });
  });

  describe("커스텀 구분자를 찾고 문자열에서 분리", () => {
    test("문자열 앞부분의 '//'와 '\n' 사이에 위치하는 문자를 커스텀 구분자를 찾는다.", () => {
      expect(app.checkCustomSplitStringByDelimiter("//;\\n1;2;3")).toEqual(true);
      expect(app.checkCustomSplitStringByDelimiter("1,2,3")).toEqual(false);
    });

    test("문자열 앞부분의 커스텀 구분자 수식을 문자열에 제외한다.", () => {
      expect(app.getStrippedString("//;\\n1;2;3")).toBe("1;2;3");
    });
  });

  describe("예외 처리", () => {
    test("숫자와 지정된 구분자로만 이루어진 문자인지 판별한다.", () => {
      expect(app.isValidString("1,2;3", [","])).toBe(false);
    });
  })
});
