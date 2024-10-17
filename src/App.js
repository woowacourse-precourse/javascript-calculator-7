import readline from "readline";

class App {
  async run() {
    //문자열 입력받기, 입력받은 문자열을 INPUT에 저장
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let INPUT = "";

    rl.on("line", (line) => {
      INPUT = line;
      rl.close();
    });
    rl.on("close", () => {
      //, or ; 구분해서 배열에 하나씩 넣기
      // "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
      const OUTPUT = INPUT.split(/,|:/).map(Number);
      const sum = OUTPUT.reduce((acc, cur) => acc + cur, 0);
      console.log(sum);
    });
  }
}

export default App;
