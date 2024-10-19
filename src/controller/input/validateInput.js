import { ErrorMessage } from "../../common/message.js";
import validateCorrectInput from "../../validator/validateCorrectInput.js";

const validateInput = (input, delimiter) => {
  if (!validateCorrectInput(input))
    throw new Error(ErrorMessage.NOT_CORRECT_INPUT_MESSAGE);
};

// validateInput(["1", "0", "3"]);

export default validateInput;
