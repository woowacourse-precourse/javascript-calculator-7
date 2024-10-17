import CheckDelimiter from './CheckDelimiter.js';
import CheckStrLen from './CheckStrLen.js';
import ContainsNegative from './ContainsNegative.js';
import ResultNumber from './ResultNumber.js';
import ValidateInputData from './ValidateInputData.js';

const ParseStr = (str) => {
  const STR_LEN = CheckStrLen(str);

  if (!STR_LEN) {
    return 0;
  }

  ContainsNegative(str);
  const [DELIMITER_SET, FIND_CUSTOM] = CheckDelimiter(str);
  const PARSE_NUMBERS = ValidateInputData(str, DELIMITER_SET, FIND_CUSTOM);
  const RESULT = ResultNumber(PARSE_NUMBERS);
  return RESULT;
};

export default ParseStr;
