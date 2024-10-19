import { ErrorMessage } from "../../common/message.js";
import validateCorrectInput from "../../validator/validateCorrectInput.js";
import validateSeparteUse from "../../validator/validateSeparateUse.js";
import extractNumbersFromInput from "./extractNumbersFromInput.js";

const validateInput = (input) => {
  const { numbers, delimiter } = extractNumbersFromInput(input);

  if (!validateCorrectInput(numbers))
    throw new Error(ErrorMessage.NOT_CORRECT_INPUT_MESSAGE);

  if (!validateSeparteUse(input))
    throw new Error(ErrorMessage.NOT_CORRECT_SEPARATOR_USE_MESSAGE);
};

// validateInput("1:2,0");

export default validateInput;
