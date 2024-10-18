import { Console } from "@woowacourse/mission-utils";

const checkInput = (input) => {

    let sum = 0;

    // 문자열에 음수가 있으면 x
    // 배열에 some이라는 메서드가 있다네요

    if(input.length === 0) sum = 0;
    
    else if(input.slice(0,2) === '//'){
        const endPoint = input.indexOf('\\n');
        if(endPoint === -1){
            Console.print('\"[ERROR]\"잘못 입력했습니다');
            return;
        } else{
            const custom = input.slice(2,endPoint);
            input = input.slice(endPoint + 2);
            if(custom.length > 1){ // custom은 숫자가 오면 안됨
                Console.print('\"[ERROR]\"커스텀 구분자는 한 글자만 사용할 수 있습니다.');
                return;
            }
            // 중복 코드
            input = input.split(',')
            .flatMap(value => value.split(':'))
            .flatMap(value => value.split(custom))
            
            if (input.some(value => value === '')) {
                Console.print('\"[ERROR]\" 구분자 사이에 값이 없습니다.');
                return;
            }

            input = input.map(a => Number(a));

            if(input.some(value => value < 0)){
                Console.print('\"[ERROR]\"양수만 입력하세요');
                return;
            } 

            sum = input.reduce((sum,current) => sum +current, 0);
            
            if(isNaN(sum)){
                Console.print('\"[ERROR]\"잘못 입력했습니다.');
                return;
            }
        }
    }
    else{
        input = input.split(',')
                .flatMap(value => value.split(':'))

        if (input.some(value => value === '')) {
            Console.print('\"[ERROR]\" 구분자 사이에 값이 없습니다.');
            return;
        }

        input = input.map(a => Number(a));

        if(input.some(value => value < 0)){
            Console.print('\"[ERROR]\"양수만 입력하세요');
            return;
        }   
        sum = input.reduce((sum,current) => sum +current, 0);
        if(isNaN(sum)){
            Console.print('\"[ERROR]\"잘못 입력했습니다.');
            return;
        }
    };
    Console.print("결과 : " + sum);
};

export default checkInput;