export default function splitCustom(inputs) {
  let splitedInputs = [];
  let startIdx = inputs.indexOf('//');
  let endIdx = inputs.indexOf('\\n', startIdx);
  let customDelimiter = inputs.substring(startIdx + 2, endIdx).trim();

  splitedInputs = inputs.substring(endIdx + 2).split(customDelimiter);

  const splitedNum = splitedInputs.map((num) => Number(num));

  let sum = 0;
  splitedNum.forEach((n) => {
    sum += n;
  });
  return sum;
}
