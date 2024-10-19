import Delimiters from "../src/Delimiters";

describe("구분자", () => {
  let delimiters;

  beforeEach(() => {
    delimiters = new Delimiters();
  })

  test("사용할 수 있는 구분자를 모두 구한다.", () => {
    const inputTest = "//(;\n";
    const result = delimiters.detect(inputTest);
    expect(result).toEqual(["(;", ",", ":"]);
  })
});