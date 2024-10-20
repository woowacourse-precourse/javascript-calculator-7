// DelimiterManager 클래스는 구분자 리스트를 관리하고 새로운 구분자를 추가하는 기능을 담당함
class DelimiterManager {
  constructor() {
    // ","와 ":"는 기본 구분자
    this.delimiters = [",", ":"];
  }

  // 현재 저장된 구분자 배열을 반환
  getDelimiters() {
    return this.delimiters;
  }
}

export default DelimiterManager;
