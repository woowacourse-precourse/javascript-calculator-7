import Delimiters from "../src/Delimiters";

describe("구분자", () => {
  let delimiters;

  beforeEach(() => {
    delimiters = new Delimiters();
  })

  test("공백은 구분자로 사용할 수 없다.", () => {
    const inputTest = "//  \\n";
    expect(() => delimiters.detect(inputTest)).toThrow("[ERROR] 커스텀 구분자는 한 개의 공백이 아닌 한 문자만 허용됩니다.");
  })
  test("커스텀 구분자를 구한다.", () => {
    const inputTest = "//;\\n";
    expect(delimiters.detect(inputTest)).toEqual([";", ",", ":"]);
  })
  test("커스텀 식별자가 앞에 다른 문자가 올 수 없다.", () => {
    const inputTest = ".//;\\n";
    expect(() => delimiters.detect(inputTest)).toThrow("[ERROR] 입력 형식이 잘못되었습니다. //는 앞에 다른 문자가 있을 수 없습니다.");
  })
  test("커스텀 구분자의 식별자는 구분자로 사용할 수 없다.", () => {
    const inputTest = "//\\\n";
    expect(() => delimiters.detect(inputTest)).toThrow("식별자(/, \\)는 커스텀 구분자로 사용할 수 없습니다.");
  })
  test("커스텀 구분자의 식별자는 구분자로 사용할 수 없다.", () => {
    const inputTest = "///\\n";
    expect(() => delimiters.detect(inputTest)).toThrow("식별자(/, \\)는 커스텀 구분자로 사용할 수 없습니다.");
  })
  test("특수 문자 *은 커스텀 구분자로 사용할 수 있다.", () => {
    const inputTest = "//*\\n";
    expect(delimiters.detect(inputTest)).toEqual(["*", ",", ":"]);
  })
  test("커스텀 구분자는 한 문자이여야 한다.", () => {
    const inputTest = "//:)\\n";
    expect(() => {delimiters.detect(inputTest)}).toThrow("[ERROR] 커스텀 구분자는 한 개의 공백이 아닌 한 문자만 허용됩니다.");
  })
  test("특수 문자 $를 커스텀 구분자로 사용할 수 있다", () => {
    const inputTest = "//$\\n";
    expect(delimiters.detect(inputTest)).toEqual(["$", ",", ":"]);
  });

  test("특수 문자 +를 커스텀 구분자로 사용할 수 있다", () => {
    const inputTest = "//+\\n";
    expect(delimiters.detect(inputTest)).toEqual(["+", ",", ":"]);
  });

  test("특수 문자 .를 커스텀 구분자로 사용할 수 없다", () => {
    const inputTest = "//.\\n";
    expect(() => {delimiters.detect(inputTest)}).toThrow("[ERROR] 마침표(.)는 커스텀 구분자로 사용할 수 없습니다.");
  });

  test("숫자는 커스텀 구분자로 사용할 수 없다", () => {
    const inputTest = "//2\\n";
    expect(() => {delimiters.detect(inputTest)}).toThrow("[ERROR]");
  });

  test("특수 문자 ^를 커스텀 구분자로 사용할 수 있다", () => {
    const inputTest = "//^\\n";
    expect(delimiters.detect(inputTest)).toEqual(["^", ",", ":"]);
  });

  test("특수 문자 |를 커스텀 구분자로 사용할 수 있다", () => {
    const inputTest = "//|\\n";
    expect(delimiters.detect(inputTest)).toEqual(["|", ",", ":"]);
  });
});