function extractNumbers(input, distinct) {
    let number = [];

    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        if (distinct.includes(currentChar)) {
            number = [];
        } else {
            number.push(i);
        }
    }
}
