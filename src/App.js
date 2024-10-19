import {Console} from "@woowacourse/mission-utils";

class App {

    findSeparator(str) {
        let separators = ",:" //기본 구분자들

        //올바르지 않은 커스텀 구분자 정의가 포함되었는지 확인
        const REGEX = /\/\/.\\n/g; //커스텀 구분자 규칙 : 1)//로 시작 2)\n로 끝남 3) 그 사이에는 한 글자
        let wrongSeparators = str.replace(REGEX, '');

        if (wrongSeparators.length !== 0) {
            Console.print(new Error(`[ERROR] 구분자 정의 방식이 올바르지 않음`))
        }

        return separators + str.replace(/\/\/|\\n/g, '');
    }

    makeOperandList(seps, str) {
        const PATTERN = new RegExp(`[${seps}]`);
        let numbers = str.split(PATTERN) //유효한 구분자를 이용해 split하여 array로 만든다

        let operandList = numbers.reduce((arr, num) => {
            if (!isNaN(num)) {//숫자인 경우에는 리스트에 담는다
                arr.push(+num) //숫자로 변경
            } else {//유효한 구분자를 이용했는데 숫자가 아닌 경우에는 에러
                throw new Error("[ERROR] 유효하지 않은 구분자 포함")
            }
            return arr;
        }, []);

        return operandList
    }

    async run() {
        //instruction message
        Console.print("덧셈할 문자열을 입력해 주세요.")

        let input = ""
        let output = Console.readLineAsync(input)

        output.then((value) => {
            //2-1) 커스텀 구분자를 찾아냅니다.
            // 1) "\\n"를 포함한다면, 그를 기준으로 앞부분은 커스텀 구분자를 작성했다고 판단합니다.
            let splitIndex = value.lastIndexOf('\\n');

            let customSeps = ''; //커스텀 구분자 부분
            let operands = value;//계산의 대상이 될 부분

            if (splitIndex !== -1) { //커스텀 구분자가 존재한다면 값을 변경
                customSeps = value.substring(0, splitIndex + 2);
                operands = value.substring(splitIndex + 2);
            }

            //유효한 구분자
            const SEPARATORS = this.findSeparator(customSeps)

            //2-2) 구분자를 이용해 숫자를 분리해냄
            let operandList = this.makeOperandList(SEPARATORS, operands)
            //2-3) 총합 계산
            let result = operandList.reduce((sum, num) => sum + num, 0)

            Console.print("결과 : " + result)

        }).catch(() => {
            Console.print("[ERROR] 문자열을 입력해주세요.")
        })

    }
}

export default App;
