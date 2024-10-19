import errorCheck from "./errorCheck.js";
const add = (inputString, custom) => {
  const backSlash = /\\/.test(custom);
  const noneCustom = /^\/\/\\n/.test(inputString);

  const separator = backSlash
    ? new RegExp(`[\\${custom},:]`)
    : new RegExp(`[${custom},:]`);

  const number = custom
    ? inputString.substring(4 + custom.length).split(separator)
    : noneCustom
    ? inputString.substring(4).split(separator)
    : inputString.split(separator);

  errorCheck(inputString, number);

  const sum = number.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0
  );
  return sum;
};

export default add;
