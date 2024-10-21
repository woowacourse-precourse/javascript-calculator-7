import readline from 'readline';

class App {
  async run() {
    const inandout_value = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    inandout_value.question('값을 입력하세요: ', (userInput) => {
      try {
        const result = this.add(userInput);
        console.log(`결과: ${result}`);
      } catch (error) {
        console.log("에러 발생:", error.message);
      } finally {
        inandout_value.close();
      }
    });
  }

  add(input) {
    let rule = /,|:/;

    const custom_rule_pattern = /^\/\/(.+?)\n(.*)/s;
    const apply_rule = input.match(custom_rule_pattern);

    if (apply_rule) {
      const custom_rule = apply_rule[1].replace(/\//g, "");
      rule = new RegExp(`[${custom_rule}]`); // 정규 표현식으로 생성
      input = apply_rule[2]; // 숫자 부분 추출
    }

    const nums = input.split(rule).map((num) => {
      return Number(num);
    });

    return nums.reduce((sum, num) => sum + num, 0); // 합산 결과 반환
  }
}

export default App;
