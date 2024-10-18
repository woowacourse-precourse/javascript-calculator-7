/**
 * 사용자의 입력을 저장하는 클래스
 */

class UserInput {
  /**
   * @type {string} 사용자의 입력을 저장하는 변수
   */
  #input;

  /**
   * 생성자
   */
  constructor() {
    this.#input = "";
  }

  /**
   * set을 이용하여 사용자의 입력을 저장하는 메소드
   * @param {string} input
   */
  setInput(input) {
    this.#input = input;
  }

  /**
   * 사용자의 입력을 반환하는 메소드
   * @returns {string}
   */
  getInput() {
    return this.#input;
  }
}

export default UserInput;
