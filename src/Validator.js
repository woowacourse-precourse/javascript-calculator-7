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

  isValid() {
    return this.#validatorList.every((validator) => validator.isValid());
  }
}

export default Validator;
