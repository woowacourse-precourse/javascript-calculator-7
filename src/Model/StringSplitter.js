export default class StringSplitter {
  #DEFAULT_DELIMITERS = /[,|:]/;

  split(string) {
    return string.split(this.#DEFAULT_DELIMITERS);
  }
}
