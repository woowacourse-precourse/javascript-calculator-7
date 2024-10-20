export default function summation(numbers) {
  return numbers.reduce((sum, num) => sum + Number(num), 0);
}
