const calculateSum = (operands) => {
  let sum = 0;
  for (let index = 0; index < operands.length; index++) {
    //index마다 숫자로 변환하여 더하기
    sum = sum + Number(operands[index]);
  }

  return (sum);
}

export default calculateSum;