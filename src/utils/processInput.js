import getSum from "./getSum.js"

const SEPERATORS = [',', ':']
const SELECTOR_REGEX = /^\/\/(.+)\n(.*)/

// string => number
// 들어온 입력값을 처리해 출력값을 계산
const processInput = (inputData) => {
    // 구분자와 숫자배열 분리
    const [newSelector, numbers] = seperateSelector(inputData)

    // 구분자 추가
    SEPERATORS.push(newSelector)

    // 구분자 기준으로 분류
    const numbersArray = seperateNumbers(numbers)

    // 합 구하기
    return getSum(numbersArray)
}

// string => [string, string]
// 지정된 구분자와 숫자배열 문자열 분리
const seperateSelector = (beginningString) => {
    const regexCheckedData = SELECTOR_REGEX.exec(beginningString)
    return [regexCheckedData[1], regexCheckedData[2]]
}

// string => number[]
// 구분자 기준으로 분류
const seperateNumbers = (numbersString) => {
    // 정규식 만들기
    const seperatorJoinString = SEPERATORS.join('|')
    const seperatorJoinRegex = new RegExp(seperatorJoinString)

    // 정규식 기준으로 구분
    const seperatedString = numbersString.split(seperatorJoinRegex)

    // string[] -> number[]
    return seperatedString.map((e) => {return parseInt(e)})
}

console.log(processInput('//;\n1;2;3'))