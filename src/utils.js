export const checkHasCustom = (string) => {
  if (string.startsWith("//") && string.includes("\\n")) {
    const DELIMITER = string.slice(2, string.indexOf("\\n"));
    return DELIMITER;
  }
  return null;
};

export const hasDuplicate = (string, delimiters) => {
  for (let delimiter of delimiters) {
    if (string.includes(`${delimiter}${delimiter}`)) {
      return true;
    }
  }
  return false;
};

export const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
