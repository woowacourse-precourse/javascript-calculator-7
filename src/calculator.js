/*
* # 문자열 덧셈 계산기

## 구현할 기능 목록

1. 빈 문자열을 입력할 경우 0을 반환한다. 예외처리 우선
2. 기본 구분자 설정 (쉼표, 콜론)
3. 2번에서 시험을 해봤으니, 커스텀 구분자를 만든다. 초기값은 기존의 쉽표와 콜론이며, "//"와 "\n" 사이의 문자를 구분자로 지정할 수 있다.
   - 예시: "//;\n1;2;3"은 세미콜론(;)을 구분자로 사용하고 결과는 6을 반환한다.
4. 잘못된 입력 값이 들어올 경우, "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨다.(입력 조건이 양수와 구분자이기 때문에, 음수 예외처리 할 것)
5. 입력된 문자열의 숫자들을 추출하여 덧셈 결과를 출력한다.
*
* */

function addCal(input) {
    // 1. 빈 문자열 입력 시 0 반환
    if (input === "") {
        return 0;
    }
    let delimiter = /[,|:]/;

    // 3. 커스텀 구분자 생성
    if(input.startsWith("//")){
        const customDelimiterMatch = input.match(/^\/\/(.)\n/);
        if(customDelimiterMatch){
            delimiter = new RegExp(customDelimiterMatch[1]);
            input = input.split("\n")[1];
        }
    }
    const numbers = input.split(delimiter);

    if(numbers.some(num => isNaN(num) || Number(num) <0)){
        throw new Error("[ERROR] 유효하지 않은 입력 값이 포함되어 있습니다.")
    }
    const result = numbers.reduce((sum, num) => sum + Number(num), 0);
    return result;
}

export default addCal;
