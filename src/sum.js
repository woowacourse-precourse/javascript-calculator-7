const sumNums = (datas) => {
  console.log(datas);
  let sum = 0;

  datas.forEach((num) => {
    sum += num;
  });

  return sum;
};

export default sumNums;
