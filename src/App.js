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

    async run() {
        //instruction message
        Console.print("덧셈할 문자열을 입력해 주세요.")

        let input = ""
        let output = Console.readLineAsync(input)

        output.then((value) => {
            Console.print(value) //입력값 임시 확인용 출력

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


        }).catch(() => {
            Console.print("[ERROR] 문자열을 입력해주세요.")
        })

    }
}

export default App;
