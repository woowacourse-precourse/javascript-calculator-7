import CustomError from "../src/CustomError";
import validator from "../src/Validator";

describe("validateNumberArray 테스트", () => {
  test.each([
    { input: [1, 2, 3] },
    { input: [0, 2, 3] },
    { input: [+0, 2, 3] },
  ])("'$input'은 CustomError가 발생하지 않는다.", ({ input }) => {
    expect(() => validator.validateNumberArray(input)).not.toThrow(CustomError);
  });

  test.each([
    {
      input: [1, NaN],
      expected: validator.NUMBER_RULES.isNumber.errorMessage,
    },
    {
      input: [-0, 1],
      expected: validator.NUMBER_RULES.isPositive.errorMessage,
    },
    {
      input: [-2, 1],
      expected: validator.NUMBER_RULES.isPositive.errorMessage,
    },
  ])(
    "'$input'은 '$expected' 메시지의 CustomError가 발생한다.",
    ({ input, expected }) => {
      expect(() => validator.validateNumberArray(input)).toThrow(
        new CustomError(expected)
      );
    }
  );
});

describe("validateCustomSeparator 테스트", () => {
  test.each([{ input: "//;\\n1;2;3" }])(
    "'$input'은 CustomError가 발생하지 않는다.",
    ({ input }) => {
      expect(() => validator.validateCustomSeparator(input)).not.toThrow(
        CustomError
      );
    }
  );

  test.each([
    {
      input: "//\\n1;2;3",
      expected: validator.CUSTOM_SEPARATOR_RULES.noSeparator.errorMessage,
    },
    {
      input: "//;;\\n1;2;3",
      expected: validator.CUSTOM_SEPARATOR_RULES.tooManySeparator.errorMessage,
    },
  ])(
    "'$input'은 '$expected' 메시지의 CustomError가 발생한다.",
    ({ input, expected }) => {
      expect(() => validator.validateCustomSeparator(input)).toThrow(
        new CustomError(expected)
      );
    }
  );
});
