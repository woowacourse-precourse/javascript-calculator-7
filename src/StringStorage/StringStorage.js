export class StringStorage {
  constructor(separator, string) {
    this.separator = separator;
    this.string = string;
  }

  get separator() {
    return this._separator
  }

  get string() {
    return this._string
  }

  set separator(separator) {
    this._separator = separator;
  }

  set string(string) {
    const validate =
      /^\s*$/.test(string) || /(?<!\d)-[1-9]\d*|\b-?0+\b/g.test(string);

    if (validate) {
      throw new Error("[ERROR]");
    }
    this._string = string;
  }

  getSeparatorArray() {
    return this._separator.split("");
  }
}
