# javascript-calculator-precourse

## Design Goals
---
![image](https://github.com/user-attachments/assets/c838ee89-ed6c-4b65-8c13-bf79cf9d8863)

## 구현 기능 목록
---
### Feature 1. 문자열 입력받음
---
- [ ] 문자열을 입력받는 기능
```
빈 문자열을 입력 받을 수 있음 (0으로 반환 되야 함)
사용자의 값을 입력하려면 woowacourse에서 제공하는 Console API 사용
  - **Console.readLineAsync()**
```   
- [ ] 입력받은 문자열 저장하는 기능
```
입력받은 문자열을 변수에 저장
```

### Feature 2. 입력 받은 문자열에서 숫자와 문자열을 구분
---
- [ ] 기본 구문자인 **쉼표**또는 **콜론**을 기준으로 숫자들을 나누는 기능
```
쉼표나 콜론이 문자열 내부에 있을 경우 빼며 숫자들을 구분해내야 함
```
- [ ] 기본 구문자를 **제외**한 **"//"**, **"\n"** 사이에 위치하는 문자를 저장하는 기능
```
커스텀 문자를 지정하기 위한 명령어는 **// \n**이 됨
 - 명령어 사이에 있는 구분자를 변수에 저장
  ex)
  input : "//;\n1;2;3"
  result : 6
  => // - \n 사이에 있는 - 위치에 있는 세미콜론(;)이 기준이 됨
```
- [ ] 위에서 저장된 문자를 기준으로 숫자들을 나누는 기능 
```
 - 커스텀 구분자가 담긴 값이 저장된 변수를 이용하여 숫자들을 구분
```
- [ ] 문자들을 구분하고 숫자만 남은 값을 저장하는 기능
```
구분된 숫자를 새로운 배열에 저장
```

### Feature 3. 구분된 숫자들을 더한 다음 출력 
---
- [ ] 구분된 숫자들을 더하고 결과 값을 반환해주는 기능
```
저장된 배열의 숫자들을 더하고 그 결과를 반환
```
- [ ] 반환된 결과를 출력
```
Console API의 **Console.print()** 활용
```
### Feature 4. 잘못된 값을 입력할 경우
---
- [ ] 잘못된 값을 입력할 경우를 감지하는 기능
```
잘못된 값
Case 1: 커스텀 구분자로 지정되지 않았으며 기본 구문자가 아닌 구분자가 들어간 경우
Case 2: 커스텀 구분자로 지정되지 않은 문자 "-"가 앞에 들어간 수는 음수이기에 양수가 아닐 경우에 해당
```
- [ ] 감지되었을 경우 "[ERROR]"로 시작하는 메시지를 띄우는 기능
```
위 케이스에 따른 각자 다른 [ERROR]로 시작하는 메시지를 반환
```
- [ ] "[ERROR]"로 시작하는 메시지를 띄웠을 경우 애플리케이션 종료시키는 기능
```
**process.exit()** 메서드를 사용하지 않아야 함
```
