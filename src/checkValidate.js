function checkValidate(splitter, string) {
  const regexp = splitter === null ? new RegExp(`^[0-9:,]+$`) : new RegExp(`^[0-9:,${splitter}]+$`);

  return regexp.test(string);
}

export default checkValidate;
