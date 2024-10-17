import { Console } from "@woowacourse/mission-utils";

const checkInput = (input) => {

    let sum = 0;

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
            .map((a) => Number(a));
            
            sum = input.reduce((sum,current) => sum +current, 0);
        }
    }

    
    Console.print("결과 : " + sum);
};

export default checkInput;