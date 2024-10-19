import CustomError from "./CustomError.js";
import CommonValidator from "./validation/commonValidtor.js";
import CustomSeparatorValidator from "./validation/customValidator.js";

class Validator {
  #validatorList;

  constructor(input, separatorList) {
    this.#validatorList = [
      new CustomSeparatorValidator(input, separatorList),
      new CommonValidator(input, separatorList),
    ];
  }

  parse() {
    this.#validatorList.forEach((validator) => {
      const { success, errorMessage = "" } = validator.parse();

      if (!success) {
        throw new CustomError(errorMessage);
      }
    });
  }
}

export default Validator;
