export default function summator(numbers) {
  return numbers.reduce((sum, num) => sum + Number(num), 0);
}
