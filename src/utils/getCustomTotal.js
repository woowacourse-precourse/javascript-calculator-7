export function getCustomTotal(array){
    var total = 0;
    const customDelimiter = array.split("\\n")[0].substring(2,); // 커스텀 구분자를 추출
    const numParts = array.split("\\n")[1]; // 분할된 숫자 부분
    const numArr = numParts.split(customDelimiter);
    for (let i = 0; i<numArr.length; i++){
        total += Number(numArr[i]);
    }
    return total;
}