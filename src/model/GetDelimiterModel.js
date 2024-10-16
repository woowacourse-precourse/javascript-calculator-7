class GetDelimiterModel {
  constructor() {}
  getDelimiter(inputText) {
    const delimiter = inputText.slice(2).split("\\n")[0];
    return delimiter;
  }
}

export default GetDelimiterModel;
