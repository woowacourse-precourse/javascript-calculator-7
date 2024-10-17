class App {
  async run() {
    //사용자 입력받기
    const input=await this.promptInput("Input strings to add: ");
    const result=this.add(input)

  }
}

export default App;
