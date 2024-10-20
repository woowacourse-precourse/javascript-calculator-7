import {Console} from "@woowacourse/mission-utils";

class App { //하나의 메소드는 하나의 역할
    sum = 0
    customSeparator = ""//인스턴스 변수는 최대 2개
    // 변환이 먼전가? 커스텀 구분이 먼전가
    async run() { //풀이 결과 반환 담당, 메소드명만 봐도 무슨역할인지 알 수 있게 
        const input = await this.input()
        const argument = this.isCustom(input) ? this.sliceString(input) : input
        this.calculator(argument)
        this.resultOutput()
    }

    async input() { //입력 메서드 : 무조건 양수 (0보다 큼)
        return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")
    }

    isCustom(param) { //커스텀 구분자 여부 판단
        const lastIdx = param.indexOf("\\n")
        if (lastIdx === -1) {
            return false
        }
        if (param.startsWith("//")) {
            return true
        }
    }

    sliceString(param) {//커스텀 구분자 슬라이싱
        const lastIdx = param.indexOf("\\n")
        this.customSeparator = param.slice(2, lastIdx)
        return param.slice(lastIdx + 2)
    }

    isSeparator(value) {//구분자 판단
        if (!isNaN(value)) { //부정 조건 지양하자
            return value
        }
        /*if (value === this.customSeparator) {
            return 0
        }
        if (value === "," || value === ":") {
            return 0
        }*/
        throw new Error("[Error]: 에러발생")
    }

    preprocessing(param) { //10이상 수 삽입 : 추후 인덴트 줄이기, 클래스는 하나의 역할만
        let arr = [...param]
        let tmpValue = "";
        param.forEach((element, idx) => { //구분자가 숫자 값이면? 문자 값이라 했으니 문자만?
                if (!isNaN(element)) {
                    tmpValue += element
                }
                if (isNaN(element) && element !== this.customSeparator && element !== ":" && element !== ",") {
                    throw new Error("[Error]: 에러발생")
                }
                if (isNaN(param[idx + 1]) || idx === param.length - 1) {
                    arr.push(tmpValue)
                    tmpValue = ""
                }
            }
        )
        if (arr[arr.length - 1] === "") {
            throw new Error("[Error]: 에러발생")
        }
        console.log(arr)
        return arr
    }

    resultOutput() {
        Console.print(`결과 : ${this.sum}`)
    }

    calculator(param) { //계산 담당
        const numberArray = this.preprocessing([...param])
        for (const element of numberArray) {
            this.sum += Number(this.isSeparator(element))
        }
    }
}

export default App;
