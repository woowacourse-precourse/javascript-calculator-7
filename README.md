# javascript-calculator-precourse

### 기본 기능

- [x] 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열 속 구분자를 기준으로 각 숫자의 합 반환
  - `예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6`

### 추가 기능

- [x] 문자열 앞 부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용
  - 예: `"//;\n1;2;3 => 6`

### 예외 처리

- [x] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함꼐 Error 처리 후 종료

### 추가로 생각할 점

- [x] 숫자가 아닌 문자가 들어간 경우
- [ ] 커스텀 구분자가 쉼표(,) 또는 콜론(:)일 경우
- [ ] 숫자에 음수가 들어간 경우
- [ ] 커스텀 구분자 형식이 잘못된 경우
- [ ] 커스텀 구분자 뒤에 데이터가 없는 경우
