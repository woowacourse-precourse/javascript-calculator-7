export const add = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += Number(element);
  });

  return `결과 : ${sum}`;
};
