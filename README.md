# javascript-calculator-precourse

## 1. 입력 처리

- **기능**: 사용자로부터 구분자와 양수로 구성된 문자열을 입력받기
  - **입력 형식**: 문자열
  - **유효성 검사**: 입력값이 문자열인지 확인

## 2. 로직 구현

- **기능**: 구분자를 기준으로 분리한 각 숫자의 합을 반환
  - **알고리즘**: 단순 덧셈

## 3. 출력 처리

- **기능**: 결과 출력
  - **출력 형식**: "결과 : X"

## 4. 예외 처리

- **기능**: 잘못된 입력 처리
  - **오류 메시지**: "[ERROR] 유효하지 않은 입력입니다."

## 5. 테스트

- **기능**: 테스트 케이스
  - [ ] **케이스 1**: "" => 0
  - [ ] **케이스 2**: "1,2" => 3
  - [ ] **케이스 3**: "1,2,3" => 6
  - [ ] **케이스 4**: "1,2:3" => 6
  - [ ] **케이스 5**: "//;\n1;2;3" => 6
  - [ ] **케이스 5**: (a, b) => 오류 메시지 출력
