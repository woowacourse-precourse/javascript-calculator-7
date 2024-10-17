export const stringSumCalculator = (input) => {
  if (input === "") return 0;

  //basic delimiter
  let delimiter = /,|:/;

  //custom delimiter
  if (input[0] === "/" && input[0] === "/") {
    let nIndex = input.indexOf("\\n");
    if (nIndex === -1) throw new Error("[ERROR]잘못된 형식입니다.");
    else {
      delimiter = new RegExp(`,|:|${input.slice(2, nIndex)}`);
      input = input.slice(nIndex + 2);
    }
  }
};
