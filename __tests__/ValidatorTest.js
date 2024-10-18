import CustomError from "../src/CustomError";
import Validator from "../src/Validator";

describe("validateNumberArray 테스트", () => {
  test.each([
    {
      input: [1, 2, 3],
    },
    {
      input: [0, 2, 3],
    },
    {
      input: [+0, 2, 3],
    },
  ])("'$input'은 유효한 숫자 배열이다.", ({ input }) => {
    expect(() => Validator.validateNumberArray(input)).not.toThrow(CustomError);
  });

  test.each([
    {
      input: [1, NaN],
      expected: Validator.VALIDATION_NUMBER_ARRAY.isNumber.errorMessage,
    },
    {
      input: [-0, 1],
      expected: Validator.VALIDATION_NUMBER_ARRAY.isPositive.errorMessage,
    },
    {
      input: [-2, 1],
      expected: Validator.VALIDATION_NUMBER_ARRAY.isPositive.errorMessage,
    },
  ])("'$input'은 '$expected' 메시지의 CustomError가 발생한다.", ({ input, expected }) => {
    expect(() => Validator.validateNumberArray(input)).toThrow(new CustomError(expected));
  });
});
