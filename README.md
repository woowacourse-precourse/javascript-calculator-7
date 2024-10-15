# javascript-calculator-precourse 문자열 덧셈 계산기

### 기능 요구 사항
입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  - 예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
    
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  
  - 예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
    
- 사용자가 잘못된 값을 입력할 경우 `[ERROR]`로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
 
## 구현할 기능 목록

1. 쉼표(,) 또는 콜론(:) 을 구분자로 사용하여 숫자를 더한다.
   
   - 구분자를 기준으로 split 하고 numbers 배열을 만든다.
   - 입력이 오직 숫자, 오직 구분자, "" 중 하나이면 0 을 반환한다.
   - 입력 값에 숫자나 구분자가 아닌 값이 포함되면 ERROR 를 발생시킨다.
3. 커스텀 구분자를 사용하여 숫자를 더한다.
   
   - // 로 시작하는 입력일 경우 커스텀 구분자를 추가할 수 있게 한다.
5. 종료 조건
   
   - 결과가 출력되면 애플리케이션을 종료한다.
   - ERROR 시 애플리케이션을 종료한다.

