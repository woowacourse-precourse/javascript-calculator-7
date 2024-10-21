# javascript-calculator-precourse

### 기능 요구 사항
1. 문자열을 입력을 받는다.
2. 쉼표와 콜론 외에 커스컴 구분자가 들어갔는지 확인해서 구분자를 추가지정한다.
3. 문자열에서 구분자를 찾고 분리해서 숫자 전부 더한다.
4. 사용자가 잘못된 값을 입력할 경우  "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 종료한다.

### 사용자 입력
- [ ] "덧셈할 문자열을 입력해 주세요." 출력
- [ ] 문자열을 입력

### 출력
- [ ] "결과 : 결과값" 출력 

### 동작 과정
- [ ] 입력된 문자열에서 커스텀 구분자가 있는지 확인
- [ ] 커스터 문자열이 없다면 쉼표와 콜론이 있는지 확인
- [ ] 입력된 문자열을 구분자로 분리
- [ ] 구분된 양수들의 합 연산

### 입력 에러 출력
- [ ] 입력값에 음수가 포함되어 있으면 "[ERROR] 양수만 입력 가능합니다."
- [ ] 구분자가 연속해서 나오면 "[ERROR] 연속된 구분자는 허용되지 않습니다."
- [ ] 구분자가 존재하지 않으면 "[ERROR] 최소한 하나의 구분자를 포함해야 합니다."
- [ ] 입력 값에 숫자 외의 값이 포함된 경우 ("1,a,3" => "[ERROR] 잘못된 입력입니다.")
- [ ] 커스텀 구분자 형식이 잘못되었으면 "[ERROR] 잘못된 커스텀 구분자 형식입니다."
- [ ] 다중 구분자를 사용하려 할 경우 "[ERROR] 다중 구분자는 지원하지 않습니다."
- [ ] 입력값이 null 또는 undefined이면 "0"

