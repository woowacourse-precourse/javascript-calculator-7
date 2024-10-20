class App {
  escapeRegExp(string) {
    // 정규식을 안전하게 생성하기 위해 특수 문자를 이스케이프 처리
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

export default App;
