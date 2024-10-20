import { SEPARATORS } from "../constants/separator.js";
import { validateCustomSeparator, validateFirstChar, validateInputFormat } from "./validation/validateForSeparator.js";

export const findSeparator = (input) => {
    if(input.startsWith("//")){
        const START = input.indexOf("//") + 2;
        const END = input.indexOf("\\n");

        validateInputFormat(START, END);

        const customSeparator = input.slice(START, END);
        validateCustomSeparator(customSeparator);

        SEPARATORS.push(customSeparator);
        return input.slice(END + 2);
    }

    validateFirstChar(input);
    return input;
};