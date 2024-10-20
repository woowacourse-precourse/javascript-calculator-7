class SplitModel {
  constructor() {}
  stringSplit(delimiter = /[:,]/, operationText) {
    const splitResult = operationText.split(delimiter);
    return splitResult;
  }
}

export default SplitModel;
