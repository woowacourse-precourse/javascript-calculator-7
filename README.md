# javascript-calculator-precourse

---

## 나만의 체크포인트

-   [x] 사용자의 문자열을 입력받는 함수 구현
-   [x] 입력받은 문자열이 요구 사항에 적합한지 확인하는 함수 구현
-   [x] 잘못된 값을 입력했을 때 에러를 발생시키는 함수 구현
-   [x] 쉼표 또는 콜론을 통해 문자열을 분리해 정수 배열로 반환하는 함수 구현
-   [x] 반환된 정수 배열을 받아 합을 반환하는 함수 구현
-   [x] 화면에 결과값 출력
-   [x] 사용자가 커스텀 구분자를 지정했는지 확인하는 함수 구현
-   [x] 문자열에서 커스텀 구분자를 분리해 반환하는 함수 구현
-   [x] 이전 문자열 분리 함수에 커스텀 구분자 기능 추가
-   [x] 테스트 코드 작성

---

## 문자열 덧셈 계산기 동작 과정

### run() 메서드

```javascript
async run() {
    const input = await this.getUserInput();
    const [customDelimiter, inputBody] = this.splitCustomDelimiter(input);
    const delimiters = customDelimiter ? `,:${customDelimiter}` : ",:";

    this.validateInput(inputBody, delimiters);
    const numbers = this.splitInputByDelimiter(inputBody, delimiters);
    const sum = this.sumNumbers(numbers);

    Console.print(`결과 : ${sum}`);
}
```

-   다른 메서드들을 조합해 문자열 덧셈 계산기의 동작이 이루어지는 주요 메서드
-   사용자로부터 문자열을 입력받아 커스텀 구분자를 분리함
-   삼항 연산자를 통해 구분자들을 delimiters 문자열에 저장
-   입력값이 유효한지 검사하고, 유효하지 않으면 에러를 발생시킴
-   delimiters를 기준으로 문자열을 분리해 정수 배열로 반환
-   반환된 정수 배열을 받아 합을 계산하고, 결과를 출력

### getUserInput() 메서드

```javascript
async getUserInput() {
    try {
        const userInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
        return userInput;
    } catch (error) {
        this.throwError("입력값을 받아오는 데 실패했습니다.");
    }
}
```

-   Console API의 readLineAsync() 메서드를 통해 사용자로부터 문자열을 입력받음
-   이때 반환값은 프로미스 객체이므로 await 키워드를 사용해 비동기 처리
-   사용자가 입력을 취소하거나 에러가 발생했을 때 에러를 발생시킴

### splitCustomDelimiter() 메서드

```javascript
splitCustomDelimiter(input) {
    if (!this.checkCustomDelimiter(input)) {
        return [undefined, input];
    } else {
        return [input[2], input.slice(5)];
    }
}
```

-   유효성 검사를 하기 전에 커스텀 구분자가 존재하는지 확인해야 함
-   checkCustomDelimiter() 메서드를 통해 커스텀 구분자가 존재하는지 확인
-   커스텀 구분자가 존재하면 커스텀 구분자와 문자열을 분리해 반환
-   커스텀 구분자가 존재하지 않으면 undefined와 기존 문자열을 반환
-   반환값은 이후 run() 메서드 내에서 구조 분해 할당을 통해 사용

### checkCustomDelimiter() 메서드

```javascript
checkCustomDelimiter(input) {
    const regex = /^\/\/([^0-9])\\n/;
    return regex.test(input);
}
```

-   정규표현식을 사용해 커스텀 구분자가 존재하는지 확인
-   커스텀 구분자는 숫자가 아닌 문자 하나로 제한하며, 문자열의 시작부분에 위치
-   커스텀 구분자를 분리할 수 있는 형식이면 true, 아니면 false 반환

### validateInput() 메서드

```javascript
validateInput(inputBody, delimiters) {
    const regex = new RegExp(`^^(0|[1-9][0-9]*)([${delimiters}](0|[1-9][0-9]*))*$`);
    if (inputBody && !regex.test(inputBody)) {
        this.throwError("입력값이 유효하지 않습니다.");
    }
}
```

-   인자로 받은 delimiters를 사용해 정규표현식을 동적으로 생성
-   정규표현식을 사용해 입력값이 유효한지 검사
-   입력값이 유효하지 않으면 에러를 발생시킴

### splitInputByDelimiter() 메서드

```javascript
splitInputByDelimiter(inputBody, delimiters) {
    if (!inputBody) return [0];
    const numbers = inputBody.split(new RegExp(`[${delimiters}]`));
    return numbers.map((number) => Number(number));
}
```

-   문자열을 delimiters를 기준으로 문자열을 분리
-   map() 고차 함수를 사용해 문자열 배열을 정수 배열로 변환

### sumNumbers() 메서드

```javascript
sumNumbers(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
```

-   reduce() 고차 함수를 사용해 정수 배열의 합을 계산

### throwError() 메서드

```javascript
throwError(message) {
    throw new Error(`[ERROR] ${message}`);
}
```

-   [ERROR] 접두어를 붙인 에러 메시지를 출력하고 에러를 발생시킴

---

## 학습 키워드

-   Git, GitHub
-   async/await, promise
-   클래스
-   정규표현식

---

## 학습 정리

-   [이전에 정리해두었던 Git 관련 정리](https://angry-whale-416.notion.site/DAY01-29c79be9c52d410781b40fbd7228d2ac?pvs=4)
-   [새로 작성한 클래스 Deep Dive 정리](http://angry-whale-416.notion.site)
