export function extractNumbers(input, distinct) {
    let number = [];
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        
        if (distinct.includes(currentChar)) {
            if (number.length > 0) {
                sum += setNumber(number);
                number = [];
            }
        } else {
            number.push(currentChar);
            if (i === input.length - 1) {
                sum += setNumber(number);
            }
        }
    }

    return sum;
}

function setNumber(number){
    let realNumber = Number(number.join(''));
    if (realNumber === 0) {
        throw new Error('[ERROR] 입력에 0이 포함되어 있습니다.');
    }
    return hi;
}

export function awareCustomSeparator(input, distinct) {
    let removeFront = input.substr(2);
    let separate = removeFront.split('\\n');
    distinct.push(separate[0]);
    input = separate[1];

    return [distinct, input];
}
