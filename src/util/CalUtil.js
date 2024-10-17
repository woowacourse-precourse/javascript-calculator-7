export const calUtils = {
  // 계산 기능
  calculate(input) {
    const customDeli = /\/\/(\D+)\\n/.test(input)
      ? input.match(/\/\/(\D+)\\n/)[1]
      : "";
    const update = input.replace(/\\n|\/\//g, "");
    const elementArr = update
      .split(customDeli ? new RegExp(`[:,]|${customDeli}`) : /[:,]/)
      .filter((ele) => ele)
      .map((ele) => Number(ele));
    const result = elementArr.reduce((acc, item) => (acc += item));

    return result;
  },
};
