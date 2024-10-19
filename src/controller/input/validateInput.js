import { ErrorMessage } from "../../common/message.js";
import validateCorrectInput from "../../validator/validateCorrectInput.js";
import validateCustomSeparator from "../../validator/validateCustomSeparator.js";
import validateSeparteUse from "../../validator/validateSeparateUse.js";
import extractNumbersFromInput from "./extractNumbersFromInput.js";

const validateInput = (input) => {
  const { numbers, customSeparator } = extractNumbersFromInput(input);

  console.log(customSeparator);

  if (!validateCorrectInput(numbers))
    throw new Error(ErrorMessage.WRONG_INPUT_MESSAGE);

  if (!validateSeparteUse(input))
    throw new Error(ErrorMessage.WRONG_SEPARATOR_USE_MESSAGE);

  if (customSeparator !== null && !validateCustomSeparator(customSeparator))
    throw new Error(ErrorMessage.WRONG_CUSTOM_SEPARATOR_USE_MESSAGE);
};

export default validateInput;
