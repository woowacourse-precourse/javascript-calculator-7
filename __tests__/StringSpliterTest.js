import StringSpliter from "../src/StringSpliter";

describe("문자열 숫자 분리 테스트", () => {
  test("문자열에서 구분자들로 숫자들만 따로 추출할 수 있다.", () => {
    const inputs = ["1", "1,2,3", "1,2:3", "1:2:3"];
    const outputs = [[1], [1, 2, 3], [1, 2, 3], [1, 2, 3]];

    outputs.forEach((output, index) => {
      const stringSpliter = new StringSpliter(inputs[index]);
      expect(stringSpliter.getNumberFrom(inputs[index])).toEqual(output);
    });
  });

  test("커스텀 구분자를 문자열로부터 구분할 수 있다.", () => {
    const stringSpliter = new StringSpliter();
    const inputs = ["//;\\n12345", "//.\\n12345", "//-\\n12345", "12345k", ";\\n1234"];
    const outputs = [";", ".", "-", "", ""];

    outputs.forEach((output, index) => {
      expect(stringSpliter.getSeperatorFrom(inputs[index])).toBe(output);
    });
  });
});
