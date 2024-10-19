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

  check() {
    const isValid = this.#validatorList.every((validator) =>
      validator.isValid()
    );

    if (!isValid) {
      throw new Error("[ERROR]: 에러입니다.");
    }
  }
}

export default Validator;
