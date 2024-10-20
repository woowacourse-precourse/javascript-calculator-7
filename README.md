# 🚀week1_javascript-calculator🚀

## 📝기능 명세서

### 📌 feat1. 사용자 입력 처리

- Console로 사용자 입력값 받기
- 입력값 분류
  - 1. 빈 str
  - 2. 기본 구분자를 사용하는 문자열
  - 3. 커스텀 구분자를 사용하는 문자열
  - 그외 에러 처리

### 📌 feat2. 커스텀 구분자 추출

- 커스텀 구분자 ('//', '\n' 사이 str) 추출해 저장
- 커스텀 구분자 선언부를 제외한 문자열 저장
- 에러: 구분자와 숫자(양수)외 다른 값이 포함된 경우

### 📌 feat3. 숫자 더하기

- 구분자 기준 숫자 추출
- 숫자 더해 반환

> Error Case 들은 메세지 출력 후 종료
