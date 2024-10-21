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

function setNumber(number) {
    let currentNumber = 0;
    let realNumber = number.map(Number);

    if (realNumber.length > 1) {
        realNumber.reverse().forEach((item, index) => {
            currentNumber += item * 10 ** index;
        });
    } else {
        currentNumber = realNumber[0];
    }

    return currentNumber;
}

export function awareCustomSeparator(input, distinct) {
    let removeFront = input.substr(2);
    let separate = removeFront.split('\\n');
    distinct.push(separate[0]);
    input = separate[1];

    return [distinct, input];
}
