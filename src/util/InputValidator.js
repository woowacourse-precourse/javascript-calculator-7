const InputValidator = {
    validateInputString(input) {
      if (input === null || input.trim() === "") return [0];
  
      const { delimiter, numbers } = this.parseInput(input);
      const splitNumbers = numbers.split(delimiter);
  
      return splitNumbers.map(num => {
        const trimmedNum = num.trim();
        
        const parsedNum = parseInt(trimmedNum, 10);
        
        if (parsedNum < 0) {
          throw new Error("[ERROR] 음수는 허용되지 않습니다.");
        }
        return parsedNum;
      });
    },
  
    parseInput(input) {
      if (input.startsWith("//")) {
        const [delimiterPart, numbersPart] = input.split("\\n");
        return {
          delimiter: delimiterPart.slice(2),
          numbers: numbersPart
        };
      }
      return {
        delimiter: /[,:]/, // 기본 구분자로 쉼표와 콜론 모두 사용
        numbers: input
      };
    }
  };
  
  export default InputValidator;