import { Console } from "@woowacourse/mission-utils";

class Calculator{
    #sum;
    #output;
    #separator
    #errorlog;
    constructor(){
        this.#sum = 0;
        this.#output = "결과 : ";
        this.#separator = [',',':'];
        this.#errorlog = "[ERROR] : ";
    }

    async run(){
        try {
            const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
            this.#checkInput(input);
        } catch (error) {
        }
    };

    #checkInput(input){
        if(!this.#checkLength(input)) return; // 길이 체크
        // Console.print(input);
        const updateInput = this.#checkCustom(input);
        if(!updateInput) return; // 커스텀 문자인지 체크
        // Console.print(input);
        const newArr = this.#separate(updateInput); // 구분자들로 나눠줌
        // Console.print(newArr);
        if(!this.#checkVoid(newArr)) return; // 연속된 구분자가 있는지 체크
        // Console.print(newArr);
        if(!this.#checkNotNumber(newArr)) return; // 숫자가 아닌 값이 있는지 체크
        // Console.print(newArr);
        if(!this.#checkNegative(newArr)) return; // 음수가 있는지 체크
        // Console.print(newArr);
        this.#addAll(newArr);
    }

    #checkLength(input){
        if(input.length === 0){
            Console.print(this.#output + this.#sum);
            return false;
        };
        return true;
    };

    #checkCustom(input){
        let update;
        if(input.slice(0,2)==='//'){
            const endPoint = input.indexOf('\\n');
            if(endPoint === -1){
                Console.print(this.#errorlog + "커스텀 문자에 \\n이 없습니다.");
                return false;
            } else{
                const customSeparator = input.slice(2,endPoint);
                if(customSeparator.length > 1){
                    Console.print(this.#errorlog + "커스텀 구분자는 한 글자만 사용할 수 있습니다.");
                    return false;
                } else if(!isNaN(Number(customSeparator))){
                    Console.print(this.#errorlog + "커스텀 문자에 숫자는 사용할 수 없습니다.");
                    return false;
                } else{
                    this.#separator.push(customSeparator);
                    update = input.slice(endPoint + 2);
                    return update;
                };
            };
        };
        return input;
    }; // 커스텀 문자열 체크
    
    #separate(input){
        let newArr;
        if(this.#separator.length ===2){
            newArr = input.split(this.#separator[0])
                .flatMap(value => value.split(this.#separator[1]));
        } else{
            newArr = input.split(this.#separator[0])
                .flatMap(value => value.split(this.#separator[1]))
                .flatMap(value => value.split(this.#separator[2]));
        };
        return newArr;
    }//문자열 나누기

    #checkVoid(input){
        if(input.some((value) => value === '')){
            Console.print(this.#errorlog + "구분자 사이에 값이 없습니다");
            return false;
        }
        return true;
    } // ,,,1 처럼 연속된 구분자 체크

    #checkNegative(input) {
        if (input.some(value => Number(value) < 0)) {
            Console.print(this.#errorlog + "양수만 입력하세요");
            return false;
        }
        return true;
    }

    #checkNotNumber(input){
        if(input.some(value => isNaN(Number(value)))){
            Console.print(this.#errorlog + "숫자만 입력하세요");
            return false;
        }
        return true;
    }

    #addAll(input){
        input = input.map(value => Number(value));
        this.#sum = input.reduce((sum,current) => sum +current, 0);
        Console.print("결과 : " + this.#sum);
        return true;
    }//문자열 더하기
};

export default Calculator;