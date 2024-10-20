class App {
  async run() {
    await this.getInputData();
  }

  async getInputData() {
    const string = await InputView.readString();
  }
}

export default App;
