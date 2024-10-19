function calculateSum(arr) {
  return arr.reduce((sum, num) => sum + Number(num), 0);
}

export default calculateSum;
