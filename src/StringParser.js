class StringParser{
    /**
    * 주어진 입력 문자열에서 기본 구분자를 추출합니다.
    * 
    * @param {string} input - 구분자를 추출할 입력 문자열
    * @param {string[]} [separators=[',', ':']] - 찾을 기본 구분자 목록. 기본값은 쉼표(,)와 콜론(:)입니다.
    * 
    * @returns {Object} 추출된 구분자와 원본 입력 문자열을 포함하는 객체
    * @returns {string[]} returns.separators - 입력 문자열에서 발견된 고유한 구분자 배열
    * @returns {string} returns.strippedInput - 원본 입력 문자열 (변경되지 않음)
    * 
    * @example
    * 반환값: { separators: [',', ':'], strippedInput: "1,2:3,4" }
    * StringParser.extractDefaultSeparators("1,2:3,4");
    * 
    */
    static extractDefaultSeparators(input,  separators = [',', ':']){
        const regexSeparators = `[${separators.join("")}]` 
        const existingSeparators = input.match(new RegExp(regexSeparators,'g'))
        return {
            separators: [...new Set([...existingSeparators])],
            strippedInput: input
        }
    }
   
    
    
}

export default StringParser