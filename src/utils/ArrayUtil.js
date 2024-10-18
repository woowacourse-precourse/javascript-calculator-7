class ArrayUtil {
  static sum(arr) {
    return arr.reduce((prev, cur) => prev + Number(cur), 0);
  }

  static splitFromSeperator(str, seperator) {
    const regexp = new RegExp(seperator.map((char) => char && `\\${char}`, 'g').join('|'));
    return str.split(regexp);
  }
}

export default ArrayUtil;
