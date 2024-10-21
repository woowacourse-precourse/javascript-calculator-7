import readline from 'readline';

class App {
    async run() {
        this.calculate();
    }

    async calculate() {
        const input = await this.readInput();
        try {
            const result = this.addNumbers(input);
            console.log(`결과 : ${result}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    readInput() {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question("덧셈할 문자열을 입력해 주세요:\n", (input) => {
                rl.close();
                resolve(input);
            });
        });
    }

    addNumbers(input) {
      if (input === "") return 0; // 빈 문자열 처리

      let delimiter = /[,:]/; // 기본 구분자: 쉼표(,)와 콜론(:)

      // 커스텀 구분자 처리
      const customDelimiterMatch = input.match(/^\/\/(.*?)\n/);
      if (customDelimiterMatch) {
          const customDelimiter = customDelimiterMatch[1]; // 커스텀 구분자 추출
          if (customDelimiter.length === 0) {
              throw new Error("[ERROR] Invalid custom delimiter format."); // 빈 구분자 처리
          }
          // 정규 표현식으로 변환: 필요한 경우 모든 특수 문자 이스케이프
          delimiter = new RegExp(customDelimiter.replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&'), 'g'); 
          input = input.substring(customDelimiterMatch[0].length); // 구분자 이후 문자열
      } else {
          // 커스텀 구분자가 없는 경우 기본 구분자 외의 문자가 있을 때 오류 발생
          const invalidDelimiterMatch = input.match(/[^0-9\s, :]/);
          if (invalidDelimiterMatch) {
              throw new Error("[ERROR] Invalid delimiter.");
          }
      }
              // 구분자를 사용하여 숫자 배열로 변환
              const numbers = input.split(delimiter).map(num => num.trim());

              // 유효성 검사 및 합산
              const sum = numbers.reduce((acc, num) => {
                  if (num === "") {
                      throw new Error("[ERROR] Invalid input format."); // 빈 값 처리
                  }
                  const number = parseFloat(num);
                  if (isNaN(number)) {
                      throw new Error("[ERROR] Invalid number format."); // 숫자 형식이 아닐 경우 에러
                  }
                  if (number < 0) {
                      throw new Error("[ERROR] Negative numbers are not allowed."); // 음수 처리
                  }
                  return acc + number; // 합산
              }, 0);
      
              return sum; // 최종 합계 반환
          }
      }