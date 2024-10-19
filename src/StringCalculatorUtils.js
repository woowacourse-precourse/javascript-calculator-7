class StringCalculatorUtils {
    convertNumArray(parsedArray) { // 문자열 배열 숫자 배열로 변환
        var convertNumArray = parsedArray.map((item) => parseInt(item, 10));
        return convertNumArray;
    }

    calculateSum(parsedArray) { // 합 구하는 함수
        let resultSum = parsedArray.reduce((acc, curr) => acc + curr, 0);
        return resultSum;
    }
}

export default StringCalculatorUtils;