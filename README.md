# javascript-calculator-precourse

### 문제 정리

<aside>

**구분자와 숫자(양수)로 이루어진 문자열**을 입력받아 구분자를 기준으로 분리한 **숫자의 합**을 반환한다.
구분자는 **쉼표와 콜론**이며, **커스텀 구분자**를 지정할 수 있다.

</aside>

### 요구사항 분석

1. 문자열을 입력받는다.
2. 문자열을 입력받아 합을 출력하는 함수(stringSumCalculator)를 구현한다.
   1. 구분자를 처리하기 위한 변수를 설정한다.
   2. 커스텀 구분자가 있는지 확인한다.
   3. 숫자를 구분하여 리스트에 저장한다.
   4. 숫자의 합을 구하여 반환한다.
3. 입력 받은 문자열을 인자로 넣은 함수 값을 출력한다.

### 주의사항 정리

1 → Console.readLineAsync을 이용한다.
2 → 빈 문자열을 입력받으면 ‘0’을 반환한다.
2-1 → 쉼표와 콜론을 동시에 처리할 지, 순차적으로 처리할 지 결정한다.
2-2 → 구분자와 문자열을 재설정한다.
2-3 → Error처리(숫자로 변환이 안될 때, 양수가 아닐 때)
3 → Console.print를 이용한다.
