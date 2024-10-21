export default function calculateSum(numberList) {
  let sum = 0;
  numberList.forEach(number => {
    sum += number;
  })

  return sum;
}