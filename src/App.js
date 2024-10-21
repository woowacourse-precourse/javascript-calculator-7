import {Console} from "@woowacourse/mission-utils";

class App { //하나의 메소드는 하나의 역할
    sum = 0
    customSeparator = null//인스턴스 변수는 최대 2개

    async run() { //풀이 결과 반환 담당, 메소드명만 봐도 무슨역할인지 알 수 있게
        const input = await this.input()
        if (input === "") {
            return this.resultOutput()
        }
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
        this.isCustomSeparatorError(this.customSeparator)
        return param.slice(lastIdx + 2)
    }

    isCustomSeparatorError(param) {
        if (param.length > 1 || !isNaN(param)) {
            throw new Error("[Error]: 에러발생")
        }
    }

    preprocessing(param) {
        const defaultSeparator = /[:,]/g;
        const argument = this.customSeparator
            ? new RegExp(`[${this.customSeparator}:,]`, 'g')
            : defaultSeparator;

        const splitArray = param.split(argument);
        return splitArray.map((elem) =>
            this.isError(elem) || Number(elem))
    }

    isError(param) {
        if (Number(param) < 0) {
            throw new Error("[Error]: 에러발생")
        }
        if (param === "") {
            throw new Error("[Error]: 에러발생")
        }
        if (param === "." || param === " ") {
            throw new Error("[Error]: 에러발생")
        }
        if (isNaN(param)) {
            throw new Error("[Error]: 에러발생");
        }
        if (param.trim() !== param) {
            throw new Error("[Error]: 에러발생");
        }
    }

    resultOutput() {
        Console.print(`결과 : ${this.sum}`)
        this.sum = 0;
    }

    calculator(param) { //계산 담당
        const numberArray = this.preprocessing(param)
        this.sum = numberArray.reduce((a, b) => a + b, 0)
    }
}

export default App;
