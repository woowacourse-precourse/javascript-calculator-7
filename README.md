# javascript-calculator-precourse

## 기능 요구 사항
- [x] 프로그램 시작 시 "덧셈할 문자열을 입력해 주세요." 출력 및 문자열 입력 대기
- [x] 입력 검증 및 숫자 추출
  - [x] 커스텀 구분자가 있는지 확인 및 추출
    - [x] "//"와 "\n" 사이에 문자가 없거나, 문자열이라면 "[ERROR] 커스텀 구분자는 문자만 가능합니다." 메세지 출력 및 Error 발생, 종료
  - [x] 커스텀 구분자 지정 문자열 외 입력 조건 검증
    - [x] 조건 만족 실패 시 "[ERROR] 구분자와 양수만 입력할 수 있습니다." 메세지 출력 및 Error 발생, 종료
  - [x] 숫자 추출
- [x] 추출된 숫자 계산
- [x] "결과 : "와 계산 결과 출력