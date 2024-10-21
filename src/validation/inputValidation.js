import { ERROR_MESSAGE } from "../constants/constants";
import { MissionUtils } from "@woowacourse/mission-utils";

function inputValidation() {
    const invalidInputError = () => {
        MissionUtils.Console.print(ERROR_MESSAGE.invalidInputError);
    }

    const negativeInputError = () => {
        MissionUtils.Console.print(ERROR_MESSAGE.negativeInputError);
    }

    const separatorError= () => {
        MissionUtils.Console.print(ERROR_MESSAGE.separatorError);
    }

    return {
        invalidInputError,
        negativeInputError,
        separatorError
    };
}

export default inputValidation;