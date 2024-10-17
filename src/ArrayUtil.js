class ArrayUtil {
  static sum(arr) {
    return arr.reduce((prev, cur) => prev + Number(cur), 0);
  }
}

export default ArrayUtil;
