import CheckDelimiter from './CheckDelimiter.js';
import CheckStrLen from './CheckStrLen.js';
import ValidateInputData from './ValidateInputData.js';

const ParseStr = (str) => {
  const STR_LEN = CheckStrLen(str);

  if (!STR_LEN) {
    return 0;
  }

  const [DELIMITER_SET, FIND_CUSTOM] = CheckDelimiter(str);
  const PARSE_NUMBERS = ValidateInputData(str, DELIMITER_SET, FIND_CUSTOM);
  const RESULT = PARSE_NUMBERS.reduce((p, n) => {
    return parseInt(p, 10) + parseInt(n, 10);
  }, 0);
  return RESULT;
};

export default ParseStr;
