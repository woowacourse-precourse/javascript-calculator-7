# javascript-calculator-precourse

## 구현할 기능

### **1. 사용자로부터 문자열 입력 받고 출력**

### **2. ","와":" 을 기본 구분자로 지정**

- ","와":"을 기준으로 문자열을 분리, 합을 반환

### **3. "//"와 "\n" 사이에 위치한 문자가 있는 경우 커스텀 구분자로 지정**

- 커스텀 구분자를 기준으로 문자열을 분리, 합을 반환

### **4. 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료**

- 에러메시지 케이스
  - 빈 문자열을 입력받을 시 에러 처리
  - 커스텀 구분자가 숫자일 경우 에러 처리
  - 커스텀 구분자가 아닌 문자가 포함되었을 경우 에러 처리
  - 커스텀 구분자는 두 글자이상일 경우 에러 처리
  - 커스텀 구분자가 공백인 경우 에러 처리
  - 음수를 입력받았을 때 에러 처리
  - 배열로 숫자가 아닌 문자를 입력받을 시 에러 처리
