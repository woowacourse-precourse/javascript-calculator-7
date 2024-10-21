# javascript-calculator-precourse

## 구현 기능 목록

- [x] 문자열 입력 받기
- [x] 구분자로 분리하기
  - [x] 기본 구분자 - 쉼표, 콜론
  - [x] 커스텀 구분자
- [x] 덧셈 결과 출력
- [x] 예외처리
  - 구분자는 문자열이 아닌 문자로 지정 `"//**\n1**2" => [ERROR] 구분자는 문자열이 아닌 문자만 가능합니다.`
  - '구분자'이므로 구분자로 시작 혹은 끝 불가 `"1,2," => [ERROR] 구분자로 시작하거나 끝날 수 없습니다.`
  - 연속된 구분자 사용 불가 `"1,,2" => [ERROR] 구분자는 2번 이상 사용할 수 없습니다.`
  - 음수, 소수, 문자 입력 불가 `"-1", "1.5", "A" => [ERROR] 잘못된 입력입니다.`
