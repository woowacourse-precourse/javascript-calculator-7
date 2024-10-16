import readline from "readline";

class App {
  async run() {
    const input = await this.getInput(); // 사용자 입력 받기
    const result = this.calculator(input);
    console.log(result); // 결과 출력
  }

  getInput() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.on("line", (answer) => {
        rl.close();
        resolve(answer); // 입력값 반환
      });
    });
  }

  calculator(input) {
    if (input === "") {
      return 0; // 입력이 없을 경우 0 반환
    }

    let separator = /,|:/; // 쉼표 또는 세미콜론으로 구분
    const splitNumbers = input.split(separator).map(Number); // 문자열을 숫자 배열로 변환
    const sum = splitNumbers.reduce((acc, curr) => acc + curr, 0); // 숫자들을 모두 더함
    return sum;
  }
}

export default App;
