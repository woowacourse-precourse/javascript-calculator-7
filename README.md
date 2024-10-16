# javascript-calculator-precourse

## ❗ 요구사항 점검

> 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.    
`예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6`
- 숫자들이 주어졌을 때, 숫자들의 합 구하기
- 빈 칸이 주어진다면 0 출력하기
- 잘 입력된 값을 구분자 목록에 있는 구분자 기준으로 분리하기
---

> 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.    
`예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.`
- 구분자 지정문이 포함된 문자가 들어온 경우 구분자 지정문을 구분하기
- 잘 입력된 구분자 지정문에서 커스텀 문자 가져오기
- 기본 구분자들 목록에 커스텀 구분자 추가하기
---
> 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
- 오류 검사
    - `//커스텀문자\n`을 문자열 앞부분이 아닌 곳에 입력한 경우
    - 더해야 하는 값이 숫자가 아닌 문자로 주어진 경우

## ⛳ 구현할 기능 목록
- [x] **1. 주어진 숫자 덧셈**
    - 숫자들이 배열로 주어졌을 때, 숫자들의 합 계산
    - 배열안에 빈 칸이 하나 주어진다면 0 출력하기

- [x] **2. 입력값 처리**
    - 조건에 맞게 입력된 값을 받으면 구분자 목록에 있는 구분자 기준으로 분리

- [ ] **3. 커스텀 문자 구분**
    - 구분자 지정문이 포함된 입력값에서 지정문과 숫자배열을 구분
    - 구분자 지정문 내 구분자 추출
    - 추출된 구분자를 구분자 목록에 추가

- [ ] **4. 오류 검사 (`process.exit()` 호출 X)**
    - 구분자 지정문 구분: `//커스텀문자\n`을 문자열 앞부분이 아닌 곳에 입력한 경우
    - 숫자배열: 더해야 하는 값이 숫자가 아닌 문자로 주어진 경우
    - 숫자배열: 추가하지 않은 이상한 구분자가 사용된 경우

- [ ] **5. 사용자 입력부 구현**
    - `Console.readLineAsync()` 활용 입력

- [ ] **6. 출력부 구현**
    - 결과값 `Console.print()` 활용 출력