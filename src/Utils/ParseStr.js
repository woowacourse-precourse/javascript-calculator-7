import CheckDelimiter from './CheckDelimiter.js';
import CheckStrLen from './CheckStrLen.js';

const ParseStr = str => {
  CheckStrLen(str);
  CheckDelimiter(str);

  return str;
};

export default ParseStr;
