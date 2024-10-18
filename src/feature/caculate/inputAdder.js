function inputAdder(numberList) {
  const INITIAL_VALUE = 0;
  const TOTAL_SUM = numberList.reduce(
    (accumulator, currnentValue) => accumulator + currnentValue,
    INITIAL_VALUE,
  );

  return TOTAL_SUM;
}

export default inputAdder;