export default function sum(sliced) {
  let sum = 0;
  console.log(sliced);
  for (const ELM of sliced) {
    if (typeof Number(ELM) != NaN) {
      sum += Number(ELM);
    } else throw "[ERROR] 숫자만 더할 수 있어요.";
  }
  return sum;
}
