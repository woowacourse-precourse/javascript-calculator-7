/*
1. 구분자들을 기준으로 string들을 나눠 배열을 만드는 로직
2. 배열을 숫자로 바꿔 합을 내놓는 로직
*/
class NumberProcessor{

    getNumberArray(string,customDelimiter){
        const delimiters = [',', ':', customDelimiter];
        const regex = new RegExp(`[${delimiters.join('')}]`);
        const parsedNumbers = string.split(regex).map( a => parseInt(a)).filter(a =>  a >= 0 && a <= 9 );
    
        return parsedNumbers;
    }

    sumNumbers(numbers){
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }

    process(string, customDelimiter){
        const numbers = this.getNumberArray(string,customDelimiter);
        return this.sumNumbers(numbers);
    }
    
}

export default NumberProcessor;