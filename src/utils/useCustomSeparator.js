import { DEFAULT_SEPARATOR } from "../constants/constants.js";

function useCustomSeparator(inputData) {
    if (inputData.startsWith("//")) {
        const newLineIndex = inputData.indexOf("\\n");
        
        const customSeparator = inputData.slice(2, newLineIndex);
        const newSeparator = new RegExp(`[${customSeparator}]`);

        const newInputData = inputData.slice(newLineIndex + 2);

        return [newInputData, newSeparator];
    }

    return [inputData, DEFAULT_SEPARATOR];
}

export default useCustomSeparator;