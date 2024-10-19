class StringSplitter {
  split(inputValue, delimiters) {
    const delimitersRegex = new RegExp(`[${delimiters.join("")}]`);
    const splitValues = inputValue.split(delimitersRegex);

    return splitValues;
  }
}

export default StringSplitter;
