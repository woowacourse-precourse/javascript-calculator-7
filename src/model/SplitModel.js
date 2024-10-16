class SplitModel {
  constructor() {}
  stringSplit(delimiter = /[:,]/, operationText) {
    const splitResult = operationText.split(delimiter);
    //임시 출력, 삭제 예정
    splitResult.map((i) => console.log(i));
    return splitResult;
  }
}

export default SplitModel;
