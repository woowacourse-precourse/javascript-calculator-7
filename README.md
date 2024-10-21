# javascript-calculator-precourse
# 문자열 덧셈 계산기

## 기능

### 1. 기본 구분자를 통한 덧셈
쉼표(,)와 콜론(:)을 기본 구분자로 하여 문자열을 분리하고 숫자의 합을 계산합니다.


---

### 2. 커스텀 구분자를 통한 덧셈
문자열의 시작이 `"//"`로 시작되면, 커스텀 구분자를 설정할 수 있습니다. 구분자 이후 줄바꿈 문자(`\n`)까지는 구분자로 설정되고, 그 이후는 해당 구분자를 이용해 숫자를 분리하여 합을 계산합니다.


---

### 3. 빈 문자열 처리
빈 문자열이 입력될 경우, 결과는 `0`을 반환합니다.


---

### 4. 음수 및 잘못된 입력에 대한 예외 처리
음수가 포함되거나 숫자가 아닌 문자가 포함된 경우에는 에러를 발생시킵니다. 에러 메시지는 `[ERROR]`로 시작하며, 이후 프로그램은 정상적으로 종료됩니다.


---

### 5. 커스텀 구분자 형식 오류 처리
커스텀 구분자가 잘못 지정된 경우에도 에러 메시지를 출력합니다.

