import ValidationError from "./ValidationError.js";
import MESSAGE from "../constants/message.js";

const Validator = {
  validateNumbers(numbers) {
    numbers.forEach((num) => {
      if (isNaN(num)) {
        throw new ValidationError(MESSAGE.ERROR.INVALID_NUMBER);
      }
      if (parseInt(num, 10) < 0) {
        throw new ValidationError(MESSAGE.ERROR.NEGATIVE_NUMBER);
      }
    });
  },
};

export default Validator;
