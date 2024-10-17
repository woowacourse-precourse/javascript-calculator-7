import getSum from "./getSum.js"

const PRE_SEPERATORS = [',', ':']
const SELECTOR_REGEX = /^\/\/(.+)\\n(.*)/

// string => number
// 들어온 입력값을 처리해 출력값을 계산
const processInput = (inputData) => {
    const seperators = [...PRE_SEPERATORS]
    let restString = inputData

    // 구분자 지정문이 있음
    if (isSelectorExisted(inputData)) {
        // 구분자와 숫자배열 분리
        let [selector, noSelector] = seperateSelector(inputData)

        // 구분자 추가 및 숫자배열 최신화
        seperators.push(selector)
        restString = noSelector
    }

    // 구분자 정보 합치기
    const seperatorJoinString = seperators.join('|')

    // 에러 처리
    checkError(restString, seperatorJoinString)

    // 구분자 기준으로 분류
    const numbersArray = seperateNumbers(restString, seperatorJoinString)

    // 합 구하기
    return getSum(numbersArray)
}

// string => boolean
// 구분자 지정문이 있는지 확인
const isSelectorExisted = (stringForCheck) => {
    return SELECTOR_REGEX.test(stringForCheck)
}

// string => [string, string]
// 지정된 구분자와 숫자배열 문자열 분리
const seperateSelector = (beginningString) => {
    const regexCheckedData = SELECTOR_REGEX.exec(beginningString)
    return [regexCheckedData[1], regexCheckedData[2]]
}

// string => number[]
// 구분자 기준으로 분류
const seperateNumbers = (restString, seperatorJoinString) => {
    // 정규식 만들기
    const seperatorJoinRegex = new RegExp(seperatorJoinString)

    // 정규식 기준으로 구분
    const seperatedString = restString.split(seperatorJoinRegex)

    // string[] -> number[]
    return seperatedString.map((e) => {return parseInt(e)})
}

// string => Error?
// 입력받은 값 유효성 검사
const checkError = (restString, seperatorJoinString) => {
    // 숫자배열이 잘 입력되었는지 에러체크
    const numbersRegexString = `^\\d+((${seperatorJoinString})\\d+)*$`
    const numbersRegex = new RegExp(numbersRegexString)
    if (!numbersRegex.test(restString)) {
        throw new Error("[ERROR] 입력이 잘못 되었습니다.");
    }
}

export default processInput