export default function sum(sliced) {
  let sum = 0;
  for (elm of sliced) {
    sum += Number(elm);
  }
  return sum;
}
