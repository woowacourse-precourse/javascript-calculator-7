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

  //numList
  let numList = input.split(delimiter).map((x) => {
    if (x == "" || isNaN(x)) throw new Error("[ERROR]잘못된 형식입니다.");
    let num = Number(x);
    if (num <= 0) throw new Error("[ERROR]양수를 입력하시오.");
    return num;
  });

  //calculate sum
  return numList.reduce((acc, cur) => acc + cur, 0);
};
