class Model {
  delimiter = new Set([",", ":"]);

  addDelimiter(stringArray) {
    stringArray.forEach((string) => this.delimiter.add(string));
  }
}

export default Model;
