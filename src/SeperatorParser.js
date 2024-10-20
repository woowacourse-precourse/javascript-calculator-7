import { INPUT_FILTER_REGEXP, SEPERATOR_REGEXP } from "./constant.js";

const seperatorParser = {
    parseSeperator(input) {
        const seperator = input.match(SEPERATOR_REGEXP)?.[0];
        if (seperator) {
            const words = input.replace(INPUT_FILTER_REGEXP, "");
            return { words, seperator };
        }
        return { words: input };
    },
};

export default seperatorParser;
