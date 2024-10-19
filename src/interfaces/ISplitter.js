class ISplitter {
  split(inputValue, delimiters) {
    throw new Error("split() 메서드는 반드시 오버라이딩 되어야 합니다.");
  }
}

export default ISplitter;
