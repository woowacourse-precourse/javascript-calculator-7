# 문자열 계산 덧셈기   


<br>


### 📝 기능 요구 사항    

- [ ] 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//" 와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용. 
  - [ ] 먼저 커스텀 구분자가 있는지부터 확인하기.     

- [ ] 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.   


- [ ] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션 종료.   


<br>


### 📝 추가 요구 사항   

- [ ] 입력문이 양수인 숫자, 구분자로 이루어진 것인지 확인하기   


<br>


### ✍️ 구현 순서    
*각각의 구현에서 하나의 함수가 하나의 기능만 하도록 구현*   

1. `Console` API를 이용하여 입력문을 만든다.   

2. 입력문을 통해 들어온 객체를 검증한다.  
    - 여기서 구분자는 길이를 1로 정한다.    
    (구분자란 긴 문자열을 구분하기 쉽게 하고, 어디까지가 하나의 인덱스 영역인지를 나타내기 위함이다.      
    따라서 그에 맞게 구분자의 길이를 1로 정한다.)    
    - 커스텀 구분자가 있는지
    - 구분자의 조건을 지켰는지 (쉼표, 콜론)   
    - 양수인 숫자, 구분자로만 이루어 졌는지      

3. 문자열의 숫자를 더해 결과값을 `Console` API를 이용하여 출력한다.   


<br>

### ✨ 이후 공부할 내용들.   

- 정규식에서 대괄호의 의미 (어떨 때 쓰이는지)   

- 정규식에서 특수표현들의 모든 표현   


### ✅ 실행 예시 및 결과

```
(입력문) "덧셈할 문자를 입력해 주세요"

(입력) "1,2:3"

(결과) 6
```