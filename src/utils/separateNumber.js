function separateNumber(inputData, defaultSeparator) {

    if (inputData.trim() === "") return 0;

    const numbers = inputData.split(defaultSeparator).map(number => {
        const parsedNumber = parseInt(number);
        return parsedNumber;
    });

    return numbers;
}

export default separator;