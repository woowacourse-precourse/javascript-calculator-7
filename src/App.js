class App {
  run() {
    Console.readLine('문자열을 입력하세요: ', (input) => {
      try {
        const result = this.calculation(input);
        Console.print(`=> ${result}`);
      } catch (error) {
        Console.print(error.message);
      } finally {
        Console.close();
      }
    });
  }

  calculation(input) {
    if (input === '') return 0;

    let separator = /[,:]/;
    const numberStrings = input.split(separator);
    let sum = 0;

    for (const numStr of numberStrings) {
      if (numStr.trim() === '') continue;
      if (!/^\d+$/.test(numStr)) { // 숫자가 아닌 경우 에러
        throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다: ' + numStr);
      }
      sum += parseInt(numStr, 10);
    }

    return sum;
  }
}

export default App;
