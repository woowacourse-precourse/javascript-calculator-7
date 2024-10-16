const SEPERATORS = [',', ':', ' ']

const processInput = (inputData) => {

}

// string => number[]
// 구분자 기준으로 분류
const seperateNumbers = (numbersString) => {
    // 정규식 만들기
    let seperatorJoinString = SEPERATORS.join('|')
    let seperatorJoinRegex = new RegExp(seperatorJoinString)

    // 정규식 기준으로 구분
    let seperatedString = numbersString.split(seperatorJoinRegex)

    // string[] -> number[]
    return seperatedString.map((e) => {return parseInt(e)})
}