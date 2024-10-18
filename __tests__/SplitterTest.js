import Splitter from "../src/Splitter";

describe("splitToNumber 테스트", () => {
  test.each([
    { input: "", expected: [0] },
    { input: ",:", expected: [0, 0, 0] },
    { input: "1,2", expected: [1, 2] },
    { input: "1,2:3", expected: [1, 2, 3] },
    { input: "-3", expected: [-3] },
    { input: ": ", expected: [0, NaN] },
    { input: "1,e", expected: [1, NaN] },
  ])("'$input'은 $expected로 분할된다.", ({ input, expected }) => {
    const splitter = new Splitter();
    const result = splitter.split(input);
    expect(result).toEqual(expected);
  });
});
