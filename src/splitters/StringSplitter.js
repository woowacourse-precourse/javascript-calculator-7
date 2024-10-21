import ISplitter from '../interfaces/ISplitter.js';

class StringSplitter extends ISplitter {
  split(inputValue, delimiters) {
    const delimitersRegex = new RegExp(`[${delimiters.join('')}]`);
    const splitValues = inputValue.split(delimitersRegex);

    return splitValues;
  }
}

export default StringSplitter;
