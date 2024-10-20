export const calculateSum = (nums) => {
  return nums.reduce((acc, val) => acc + parseInt(val), 0);
};
