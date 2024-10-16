class App {
  async run() {
    this.extractInput("1,2:3", [",", ":"]);
  }

  extractInput(str, sep) {
    // 입력된 값을 구분자를 통해 분리
    // 구분자를 이용하여 정규 표현식을 만들어준뒤 split함수를 통해 분리
    const sepRegex = new RegExp(`[${sep.join("")}]+`);
    return str.split(sepRegex);
  }
}

export default App;
