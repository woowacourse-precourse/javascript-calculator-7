import CustomSepatator from "../src/CustomSeparator";

describe("hasPattern 테스트", () => {
  test.each(["//;\\n1;2;3", "//;\\n", "//\\n123", "//;;\\n1;;2;;3"])(
    "'%s'에는 커스텀 구분자 패턴이 존재한다.",
    (input) => {
      const result = CustomSepatator.hasPattern(input);
      expect(result).toBe(true);
    }
  );

  test.each(["//;1;2;3", ";\\n1;2;3", " //;\\n1;2;3", "1;2;3"])(
    "'%s'에는 커스텀 구분자 패턴이 존재하지 않는다.",
    (input) => {
      const result = CustomSepatator.hasPattern(input);
      expect(result).toBe(false);
    }
  );
});

describe("removePattern 테스트", () => {
  test.each([
    { input: "//;\\n1;2;3", output: "1;2;3" },
    { input: "//;\\n", output: "" },
  ])(
    "'$input'에서 커스텀 구분자 패턴을 제거하면 '$output'이다.",
    ({ input, output }) => {
      const result = CustomSepatator.removePattern(input);
      expect(result).toBe(output);
    }
  );
});

describe("extractSeparator 테스트", () => {
  test.each([
    { input: "//\\n1;2;3", output: "" },
    { input: "//;\\n1;2;3", output: ";" },
    { input: "//;;\\n1;2;3", output: ";;" },
  ])("'$input'에서 커스텀 구분자는 '$output'이다.", ({ input, output }) => {
    const result = CustomSepatator.extractSeparator(input);
    expect(result).toBe(output);
  });
});
