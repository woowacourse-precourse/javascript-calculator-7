class Calculate {
  sum(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
}

export default Calculate;
