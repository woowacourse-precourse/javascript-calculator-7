# javascript-calculator-precourse

## 필요한 기능

1. 구분자 묶음 → 해당 클래스에 존재하는 문자 만이 구분자 역할을 한다.
2. 문자 구분 기능 → 입력한 문자열에서 구분자 추가 문자열과 계산 문자열을 구분해서 분리해준다.
3. 구분자 추가 기능 → 구분자 추가 문자열에서 문자를 구분자 묶음에 추가해준다.
   1. 기능에서는 이때 여러 구분자를 추가하라는 말이 없지만, 이때 쉼표와 콜론을 사용하면 여러 구분자가 추가될 수 있게 만들어주자.
4. 계산기 기능 → 추가된 구분자와 기존 구분자를 가지고 덧셈을 실시하는 기능
5. 결과 출력 기능 → 계산기 결과를 출력해주는 기능
6. 에러 기능 → 다양한 에러에 대해서 [ERROR] 를 앞에 붙여서 다양한 에러에 대해서 대응하는 기능
   1. 추가되지 않은 구분자를 사용할 경우
   2. 구분자 추가란에 문자가 아닌 숫자를 추가할 경우
   3. 문자열이 구분자로 종료될 경우 + 문자열이 구분자로 시작할 경우
   4. // \n 둘 중 하나가 부재할 경우
   5. 숫자의 범위가 int를 벗어날 경우
   6. **추가는 더 해보고 찾아볼 것**

## 구조

### 클래스

#### DelimiterManager

역할: 구분자 관리, 문자열 파싱, 숫자 추출 기능을 모두 처리하는 클래스

필드:

- [O] delimiters: 현재 사용 중인 구분자들의 배열

메서드:

- [O] constructor(): 객체 생성 시 기본 구분자 리스트(,, :)로 초기화
- [O] getDelimiters(): 현재 저장된 구분자 배열을 반환
- [] addCustomDelimiter(delimiter): 새로운 커스텀 구분자를 구분자 리스트에 추가
- [O] parseInput(input): 입력 문자열을 분석하여 커스텀 구분자와 계산할 문자열을 추출
- [O] extractNumbers(calculationString): 구분자를 사용하여 숫자를 추출하고 배열로 반환

#### Calculator

역할: 숫자 배열을 받아 합계를 계산

메서드:

- [O] calculate(numbers): 숫자 배열의 합계를 계산하여 반환

#### ResultPrinter

역할: 계산 결과를 출력

메서드:

- [O] print(result): 계산 결과를 출력

#### ErrorHandler

역할: 에러를 처리하고 메시지를 출력

메서드:

- [] handleInvalidDelimiter(usedDelimiter): 입력된 구분자가 등록된 구분자 리스트에 없는 경우 에러 메시지를 출력
- [] handleInvalidCustomDelimiter(customDelimiter): 커스텀 구분자가 숫자인지 검증하고, 숫자일 경우 에러 메시지를 출력
- [] handleDelimiterAtStringEnds(inputString): 입력 문자열이 구분자로 시작하거나 끝나는지 확인하고, 그렇다면 에러 메시지를 출력
- [] handleMissingCustomDelimiterSyntax(): 커스텀 구분자 지정 시 // 또는 \n 중 하나가 부재할 경우 에러를 출력
- [] handleNumberOutOfRange(number): 숫자의 범위가 정수 범위를 벗어나는 경우 에러를 출력
- [] handleGenericError(errorMessage): 기타 에러 상황에 대해 일반적인 에러 메시지를 출력

### 함수

#### run()

역할: 프로그램의 시작점으로, 전체 흐름을 제어

주요 역할:

- 사용자 입력을 받는다.
- StringParser를 이용해 입력을 파싱
- DelimiterManager를 이용해 구분자 리스트를 관리
- Calculator를 이용해 계산을 수행
- 결과를 ResultPrinter를 통해 출력
- 에러 발생 시 ErrorHandler를 호출

## 구현 순서

1. 입력을 받아 그대로의 문자열을 출력
   a. DelimiterManager - constructor() - 객체 생성 시 기본 구분자 리스트(,, :)로 초기화
   b. ResultPrinter - print(result) - 입력받은 문자열을 그대로 출력

2. 입력받은 문자열을 커스텀 구분자 문자열과 숫자 문자열로 나누어 입력받고 이를 각각 출력
   a. DelimiterManager - parseInput(input): 입력 문자열을 분석하여 커스텀 구분자와 계산할 숫자 문자열을 추출
   b. DelimiterManager - getDelimiters(): 현재 사용 중인 구분자 배열 반환
   c. ResultPrinter - print(result): 구분자 배열과 계산할 문자열을 각각 출력

3. 커스텀 구분자 가져와서 구분자 배열에 넣고 출력해보기
   a. DelimiterManager - addCustomDelimiter(delimiter): 새로운 구분자를 배열에 추가
   b. ResultPrinter - print(result): 구분자 배열과 계산할 숫자 문자열을 출력

4. 구분자를 기준으로 계산
   a. DelimiterManager - extractNumbers(calculationString): 구분자를 기준으로 계산할 숫자를 추출
   b. Calculator - calculate(numbers): 추출된 숫자 배열의 합계를 계산하여 반환
   c. ResultPrinter - print(result): 추출된 숫자를 출력
