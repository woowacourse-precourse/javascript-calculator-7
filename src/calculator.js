function extractNumbers(input, distinct) {
    let number = [];
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        if (distinct.includes(currentChar)) {
            if (number != []) {
                sum += setNumber(number);
                number = [];
            }
        } else {
            number.push(i);
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
        realNumber.reverse();
        realNumber.forEach((item, index) => {
            item = item * 10 ** index;
            currentNumber += item;
        });
    } else {
        currentNumber = realNumber[0];
    }

    return currentNumber;
}

function awareCustomSeprator(input, distinct) {
    let removeFront = input.substr(2);
    let seperate = removeFront.split('\\n');
    distinct.push(seperate[0]);
    input = seperate[1];
    return distinct, input;
}
