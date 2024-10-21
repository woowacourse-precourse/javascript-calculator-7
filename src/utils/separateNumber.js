function separateNumber(inputData, defaultSeparator) {

    const numbers = inputData.split(defaultSeparator).map(number => {
        const parsedNumber = parseInt(number);
        return parsedNumber;
    });

    return numbers;
}

export default separateNumber;