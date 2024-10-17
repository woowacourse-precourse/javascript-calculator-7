function addCal(input) {
    if (input === "") {
        return 0;
    }
    let delimiter = /[,|:]/;

    if(input.startsWith("//")){
        const customDelimiterMatch = input.match(/^\/\/(.)\n/);
        if(customDelimiterMatch){
            delimiter = new RegExp(customDelimiterMatch[1]);
            input = input.split("\n")[1];
        }
    }
    const numbers = input.split(delimiter);

    if(numbers.some(num => isNaN(num) || Number(num) <0)){
        throw new Error("[ERROR] 유효하지 않은 입력 값이 포함되어 있습니다.")
    }
    const result = numbers.reduce((sum, num) => sum + Number(num), 0);
    return result;
}

export default addCal;
