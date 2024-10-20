class GetDelimiterModel {
  constructor() {}
  getDelimiter(inputText) {
    const delimiter = inputText.slice(2).split("\\n")[0];
    const operationText = inputText.split("\\n")[1];
    return [delimiter, operationText];
  }
}

export default GetDelimiterModel;
