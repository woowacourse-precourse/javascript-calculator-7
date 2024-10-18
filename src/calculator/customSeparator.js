const customSeparator = (inputString) => {
  const regex = /^\/\/(.)\\n.+/;
  const separator = inputString.match(regex);
  if (separator) {
    return separator[1];
  } else {
    return;
  }
};

export default customSeparator;
