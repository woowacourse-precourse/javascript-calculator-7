# javascript-calculator-precourse

## 필요한 구현 목록

### 기능 목록
- 쉼표(,) 또는 콜론(;) 일시 구분자로 인식하도록
- "//""\n" 사이에 있는 문자 구분자로 인식
- 구분자로 인식 했을 경우 + 기능
- null 일시 0 출력

### [ERROR]
- 숫자 , 구분자 이외에 잘못된 값을 입력시 error
- 음수 입력시 error
- 커스텀 문자열에 두개 이상 문자열 입력시 error
- 마지막에 문자로 끝날시 에러 

## 구현 순서 

### 기능 목록
1. [0] input 구현
2. [0] //로 시작하면 커스텀 구분자 로 판단
3. [0] 커스텀 구분자, 쉼표(,), 콜론(:) 에 따라 split으로 나눠서 배열에 저장
4. [0] 배열 저장 한거 더하기 
5. [0] input이 "" 거나 0 이면 0 출력
6. [0] 결과 출력

### [ERROR]
1. [0] 입력받는 값이 숫자 , // 인지 확인하기 아닐지 error 메시지
2. [0] 입력값 중 음수가 있는 경우 error
3. [0] //, \n 사이에 구분자가 여러개 있을시 에러 
4. [0] 마지막에 문자로 끝날시 에러 
5. [0] 쉼표 , 콜론이 아닌데 //이 없을 경우 에러 
