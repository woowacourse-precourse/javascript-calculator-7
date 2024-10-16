export function calculateSum(arr) {
  return arr.reduce((sum, num) => sum + Number(num), 0);
}
