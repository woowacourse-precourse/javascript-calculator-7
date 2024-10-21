const calculator = {
  /**
   * @public
   * @param { Array<Number> } numbers - 숫자 배열
   * @returns { Number } - 숫자 배열의 합
   */
  sum: (numbers) => numbers.reduce((cur, acc) => cur + acc, 0),
};

export default calculator;
