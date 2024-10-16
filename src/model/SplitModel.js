class SplitModel {
  constructor() {}
  stringSplit(delimiter = /[;,]/, inputText) {
    console.log(`delimiter: ${delimiter.toString()}`);
    console.log(`inputText: ${inputText}`);
    const splitResult = inputText.split(delimiter);
    console.log(`result: ${splitResult}`);
    return splitResult;
  }
}

export default SplitModel;
