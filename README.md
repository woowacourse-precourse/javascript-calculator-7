# 🪐우아한테크코스 프리코스 1주차. 문자열 덧셈 계산기

## 🔥구현 기능 목록

### 0. 문자열 입력 받기

- [x] 사용자로부터 문자열 입력 받기

### 1. 기본 구분자(쉼표, 콜론) 사용한 문자열

- [x] 구분자 기준으로 숫자 분리
- [x] 숫자의 합 반환

### 2. 커스텀 구분자를 지정한 문자열

- [x] 커스텀 구분자 검사
- [x] 커스텀 구분자 기준으로 숫자 분리
- [x] 숫자의 합 반환

### 3. 빈 문자열

- [x] 결과 0 반환

### 4. 잘못된 값을 입력할 경우 에러 발생

- [x] `[ERROR]`로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션 종료
  - [x] 유효하지 않은 문자를 입력한 경우
  - [x] 구분자와 구분자 사이에 숫자가 없는 경우
  - [x] 구분자만 입력한 경우
  - [x] 커스텀 구분자로 숫자를 지정한 경우
  - [x] `//`으로 시작하는 문자열에 `\n`이 없는 경우
  - [ ] 커스텀 구분자가 두 글자 이상인 경우
