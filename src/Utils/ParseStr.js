import CheckDelimiter from './CheckDelimiter.js';
import CheckStrLen from './CheckStrLen.js';
import ValidateInputData from './ValidateInputData.js';

const ParseStr = str => {
  CheckStrLen(str);
  const [delimiterSet, findCustom] = CheckDelimiter(str);
  const parseNumbers = ValidateInputData(str, delimiterSet, findCustom);

  return str;
};

export default ParseStr;
