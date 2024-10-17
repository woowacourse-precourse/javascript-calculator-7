import CheckDelimiter from './CheckDelimiter.js';
import CheckStrLen from './CheckStrLen.js';
import ResultNumber from './ResultNumber.js';
import ValidateInputData from './ValidateInputData.js';

const ParseStr = str => {
  CheckStrLen(str);
  const [delimiterSet, findCustom] = CheckDelimiter(str);
  const parseNumbers = ValidateInputData(str, delimiterSet, findCustom);

  return ResultNumber(parseNumbers);
};

export default ParseStr;
