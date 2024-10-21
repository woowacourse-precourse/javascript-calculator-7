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
        if(!input ) throw Error("[[extractDefaultSeparators]]: invalid input")

        const regexSeparators = `[${separators.join("")}]`
        const existingSeparators = input.match(new RegExp(regexSeparators,'g'))
        
        return {
            separators:existingSeparators ?[...new Set([...existingSeparators])]:[],
            strippedInput: input
        }
    }
   
    /**
     * 주어진 입력 문자열에서 사용자 정의 구분자를 추출합니다.
     * 
     * @param {string} input - 구분자를 추출할 입력 문자열
     * @param {Object} [pattern] - 구분자를 찾기 위한 패턴 객체
     * @param {string} [pattern.start="//"] - 사용자 정의 구분자의 시작 문자열
     * @param {string} [pattern.end="\\n"] - 사용자 정의 구분자의 종료 문자열
     * 
     * @returns {Object} 추출된 구분자와 처리된 입력 문자열을 포함하는 객체
     * @returns {string[]} returns.separators - 추출된 사용자 정의 구분자 배열
     * @returns {string} returns.strippedInput - 구분자가 제거된 입력 문자열
     */
    static extractCustomSeparators(input,pattern = {start:"//", end:"\\n"}){
        if(!input) throw Error("[[extractDefaultSeparators]]: invalid input")

        const separators = [];
        const {start, end } = pattern;
        while(true){
            const startIndex = input.indexOf(start);
            if(startIndex ===-1) break
            
            const post =input.split(start)[1] //split을 통해, 문자열로 됨 \\n 
            //post에서 end가 존재 하면      
            const endIndex = post.indexOf(end);
            if ( endIndex === -1){
                throw new Error("잘못된 구분자 형식 입니다.")
            }

            //구분자 빼기 
            const customSeparator=post.split(end)[0]
            if(customSeparator){
                separators.push(customSeparator);
                const separatorRegex = `${start}${customSeparator}${end}`;
                input = input.replace(separatorRegex," ") //TODO: 주석 지우기 빈문자열로 만들어서 중간에 1,2;3//;\n1->"1,2;3 1" ->[1,2,3,0,1]로 추출할 수 있다.
            }      
        }
        return {separators, strippedInput:input}
        
    }

    static splitByMultipleSeparators(separators, strings){
        const regexSeparators = `[${separators}]`
        return strings.split(new RegExp(regexSeparators,"g")).filter(str => str !== ''); 

    }

    static convertToNumbers(tokens){
        return tokens.map(token => {
            const parsed = Number(token)
            if (isNaN(parsed)|| parsed<0 ) {
              throw new Error(`[ERROR] 잘못된 입력값입니다. ${token}`);
            }
            return parsed;
          });
    }
}

export default StringParser