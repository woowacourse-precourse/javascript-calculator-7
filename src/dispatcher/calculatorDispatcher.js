class Dispatcher {
  constructor() {
    this.listeners = [];
  }

  // 리스너 등록
  register(listener) {
    this.listeners.push(listener);
  }

  // 등록된 리스너에 엑션 전달
  dispatch(action) {
    this.listeners.forEach((listener) => listener(action));
  }
}

const dispatcher = new Dispatcher();
export default dispatcher;
