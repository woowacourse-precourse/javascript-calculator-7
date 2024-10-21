class App {
    // run: main
    async run() {
      try {
        Console.print("덧셈할 문자열을 입력해 주세요.\n");
        const input = await Console.readLineAsync();
  
        if (!input.trim()) {
          throw new Error("[ERROR] 입력값 오류");
        }
  
        const result = this.calculate(input.trim());
        Console.print(`결과 : ${result}`);
      } catch (error) {
        Console.print(error.message);
        throw error; 
      }
    }
  
}

export default App;