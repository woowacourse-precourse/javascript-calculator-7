function splitString(splitter, string) {
  const regexp = splitter === null ? new RegExp(`[:,]`, 'g') : new RegExp(`[:,${splitter}]`, 'g');
  const replaceString = string.replace(regexp, ' ');

  return replaceString.split(' ');
}

export default splitString;
