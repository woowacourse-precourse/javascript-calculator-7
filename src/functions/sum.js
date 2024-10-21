export default function sum(sliced) {
  let sum = 0;
  console.log(sliced);
  for (const ELM of sliced) {
    const value = Number(ELM);
    if (value == NaN) throw new Error("[ERROR] 숫자만 더할 수 있어요.");
    else if (value < 0) throw new Error("[ERROR] 양수만 더할 수 있어요.");
    else sum += Number(ELM);
  }
  return sum;
}
