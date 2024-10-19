# javascript-calculator-precourse

## 문제 정리


> **구분자와 숫자(양수)로 이루어진 문자열**을 입력받아 구분자를 기준으로 분리한 **숫자의 합**을 반환한다.
> 
> 구분자는 **쉼표와 콜론**이며, **커스텀 구분자**를 지정할 수 있다.

<br/>

## 기능 요구사항 정리

1. 입력 문자열을 받는다.
2. 커스텀 구분자를 추출한다.
   1. 입력 문자열에 커스텀 구분자가 포함되어 있는지 확인하고, 포함되어 있지 않다면 커스텀 구분자를 추출하지 않는다.
   2. 커스텀 구분자가 입력 문자열의 첫번째에 위치하는지 확인하고, 위치하지 않다면 오류를 던진다.
   3. 커스텀 구분자, 숫자 문자열을 추출한다.
3. 기본 구분자`(',' ':')`와 커스텀 구분자를 함께 이용하여 숫자 문자열을 배열로 변환한다.
4. 배열 원소인 숫자 문자열이 특정 조건을 만족해야한다.
   - 빈 문자열(`''`)은 숫자 `0`으로 계산한다.
   - 오직 숫자로 구성된 문자열만 숫자로 형변환한다.
   - 이 외의 조건은 오류를 던진다.
5. 배열 원소인 형변환된 숫자들을 합산한다.
6. 합산된 결과를 출력한다.
7. 제대로 기능이 구현되었는지 테스트코드를 작성한다.

<br/>

## 주의사항 정리

1. `@woowacourse/mission-utils` 패키지의 `Console` 클래스를 활용하여 입출력을 진행한다.
   1. `Console.readLineAsync`, `Console.print()` 
2. 빈 문자열(`''`)은 숫자 `0`으로 계산한다.
3. 잘못된 문자열인 경우 "[ERROR]"로 시작하는 오류 메시지와 함께 `Error`를 발생시킨 후 프로그램이 종료된다.

<br/>

## 구현시 고려한 사항

- 입력 문자열에서 커스텀 구분자가 포함될 때 기존의 구분자를 제외할지 포함할지 고민했고, 포함하여 계산하도록 구현했습니다. 
- `,,1,2` 와 같이 구분자 사이에 숫자가 없는 경우, 빈 문자열으로 해석하여 `0`으로 계산하도록 구현했습니다.
- 커스텀 구분자가 없는 경우 `+1` 문자열은 숫자로 인식하지 않고 오류를 던지도록 구현했습니다.
