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
      let re = new RegExp("//(.*?)\\\\n"); //구분자 캡처를 위해 (.*?) 사용
      let split_input;
      let OUTPUT;

      if ((split_input = re.exec(INPUT)) !== null) {
        // "//;\n1;2;3" => 6
        //split_input에는 //;\n 이 부분만 들어감.
        let new_re = split_input[1]; //새로운 구분자를 new_re에 저장
        let new_input = INPUT.replace(re, "");
        OUTPUT = new_input.split(new_re).map(Number);
      } else {
        // "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
        let default_re = new RegExp(",|:");
        OUTPUT = INPUT.split(default_re).map(Number);
      }
      const sum = OUTPUT.reduce((acc, cur) => acc + cur, 0);
      console.log(sum);
    });
  }
}

export default App;
