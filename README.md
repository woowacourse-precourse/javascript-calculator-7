## 🏁 과제 진행 요구 사항

<details>
<summary>자세히 보기</summary>

- 미션은 과제를 포크하고 클론하는 것으로 시작한다.

- 기능을 구현하기 전 `README.md` 에 구현 할 기능 목록을 정리하여 추가한다.

- Git의 커밋 단위는 앞 단계에서 `README.md`에 정리한 기능 목록 단위로 추가한다.

</details>

## ⚙️ 기능 요구 사항

<details>
<summary>자세히 보기</summary>

<br/>

> **입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.**

- 쉼표, 콜론을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.

  - ex) `"" => 0 / "1,2" => 3 / "1,2,3" => 6 / "1,2:3" => 6`

- 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞 부분의 `//` 와 `\n` 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  - ex) `"//;\n1;2;3"` 을 입력하면 구분자는 세미콜론이며 결과 값은 `6`이 반환되어야 한다.
- 사용자가 잘못된 값을 입력할 경우 `[ERROR]` 로 시작하는 메세지와 함께 `Error` 를 발생시킨 후 애플리케이션을 종료되어야 한다.

### 📸 입출력 요구 사항

- 입력: 구분자와 양수로 구성된 문자열
- 출력: 덧셈 결과

실행 결과 예시

```js
덧셈할 문자열을 입력해 주세요. -> 출력
1,2,3 -> 입력
결과 : 6 -> 출력
```

</details>

## 💻 프로그래밍 요구 사항

<details>
<summary>자세히 보기</summary>

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 `App.js` 의 `run()` 이다.
- `package.json` 은 변경할 수 없으며, 제공된 라이브러리만 사용해야 한다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 코드를 작성한다.

</details>

## 🤔 생각해보기

<details>
<summary>자세히 보기</summary>

<br/>

> **이번 과제에서는 유저 입력을 받는 부분에서 올바른 구분자가 들어갔는지 예외 처리하는게 중요한 것 같다.**

- **기본 구분자: 쉼표(`,`)와 콜론(`:`)이 들어갔는지 확인**

- **커스텀 구분자: `//` , `\n` 사이의 문자를 확인**

> **💡 실행 결과 예시를 봤을 때 구분자가 여러개여도 되는 것 같다.**
>
> **`1,2:3` → 쉼표(`,`)와 콜론(`:`), 두 구분자 모두 들어가있어도 정상 동작한다.**

### 가설 1. 기본 구분자 + 커스텀 구분자도 가능할까?

입력 문자열: `//;\n1,2:3;4`

- 기본 구분자: `,` , `:`
- 커스텀 구분자: `;`

### 가설 2. 커스텀 구분자 여러개도 가능할까?

입력 문자열: `//;\n//a\n1;2a3`

- 커스텀 구분자: `;` , `a`

### 가설 3. 커스텀 구분자를 선언하였지만 사용하지 않는 경우

입력 문자열: `//;;\n1,2`

- 기본 구분자: `,`
- 커스텀 구분자: `;;` (형식에 맞게 선언되었지만 사용하지 않았다)

### 가설 4. 커스텀 구분자 형식은 올바르게 사용하였지만 사이 문자열이 없는 경우

입력 문자열: `//\n12`

- 커스텀 구분자: `""(빈 문자열)`

### 가설 5. 커스텀 구분자가 숫자 형식인 경우

입력 문자열: `//1\n112`

- 커스텀 구분자: `1`

### 가설 6. 커스텀 구분자가 `\n` 인 경우

입력 문자열: `//\n\n1\n2`

- 커스텀 구분자: `\n`

### 결론

`1, 2번 가설` - 구분자 개수에 대한 제한이 없었고, 실행 결과 예시에서 구분자를 여러개를 사용한 것을 봤을 때 정상적으로 동작하게 해야할 것 같다.

`3번 가설` - 커스텀 구분자 형식에 맞게 선언되어있기 때문에 정상 동작하게 해야할 것 같다.

`4번 가설` - 커스텀 구분자 형식에는 맞지만 구분자 자체가 없어서 예외 처리를 해야할 것 같다.

`5번 가설` - 커스텀 구분자와 양수가 구분이 되지 않아 예외처리를 해야할 것 같다.

`6번 가설` - 커스텀 구분자 형식이 `//` 와 `\n` 사이의 문자열이기 때문에 정상 동작해야할 것 같다고 생각이 들었지만 `가설 2번 커스텀 구분자가 여러개인 경우` 와 충돌되는 부분이 있다.

예를 들어서 입력 문자열이 `//\n\n//a\n1\n2a3` 인 경우에 뒤에 숫자 부분을 제거하면 `//\n\n//a\n` 이 남는다.

그러면 여기서 커스텀 구분자는 `\n, a` 이렇게 2개여야 할까? 아니면 처음 `//` , 끝 `\n` 사이에 있는 `\n\n//a` 이 커스텀 구분자가 되어야 할까?

**다시 한번 요구 사항을 살펴보면 다음과 같다.**

> **커스텀 구분자는 문자열 앞 부분의 `//` 와 `\n` 사이에 위치는 하는 문자를 커스텀 구분자로 사용한다.**

`가설 2번 커스텀 구분자가 여러개인 경우` 의 결론을 잘못 내린 것 같다!

커스텀 구분자는 여러개일 수 없다. 그 이유는 `//` 와 `\n` 사이에 있는 문자열이 커스텀 구분자이기 때문이다.

`가설 2번`에서 살펴봤던 예시 문자열 `//;\n//a\n` 을 요구사항에 맞춰보았을 때 커스텀 구분자는 `;\n//a` 이다.

결론적으로 `가설 2번`은 잘못 되었고, `가설 6번`이 정상 동작 되어야 한다.

구분자는 정규 표현식을 통해 작성하는게 좋아보인다.

> **정규 표현식(Regular Expression)**
>
> - 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는 데 사용된다.
> - 반복문과 조건문을 사용해야 할 것 같은 복잡한 코드도 정규표현식을 이용하면 매우 간단하게 표현이 가능하다.

&nbsp;

---

### 🤔 기능 요구사항 ↔ 입력 요구사항

`(기능 요구사항: "" => 0) !== (입력 요구사항: 구분자와 양수로 구성된 문자열)`

기능 요구 사항에서는 `빈 문자열을 입력하면 0이 나온다는` 예시가 있는데, 입력 요구사항에서는 입력은 `구분자와 양수로 구성된 문자열`이라고 되어있어 **예시 처럼 빈문자열이 들어올 수 없기 때문에 두 요구사항이 맞지 않는 부분이 있는 것 같다.**

기능 요구 사항에 다른 예시들을 보면 입력에 `구분자와 양수로 구성된 문자열` 조건을 준수하고 있기 때문에 `"" => 0` 조건이 잘못됐을 가능성이 높을 것 같다.

&nbsp;

</details>

## 🧶 정규 표현식 학습

<details>
<summary>자세히 보기</summary>

<br>
<a href="https://inpa.tistory.com/entry/JS-📚-정규식-RegExp-누구나-이해하기-쉽게-정리#정규_표현식regular_expression">
학습 자료: 📚 JavaScript 정규 표현식 문법 총정리 + 응용 예제
</a>

### 메서드

```js
const regex = new RegExp(/apple/);
const string = "Hello banana and apple";
const test = regex.test(string); // true
const match = string.match(regex);
// ['apple', index: 17, input: 'Hello banana and apple', groups: undefined]
// [0] = 매치된 문자열
// [1] = 매치된 문자열의 시작 인덱스
// [2] = 원본 입력 문자열
// [3] = 명명된 캡처 그룹의 결과
const replace = string.replace(regex, "orange"); // Hello banana and orange
```

### 플래그

| Flag | Description                            |
| :--: | -------------------------------------- |
|  i   | 대소문자 구분 X                        |
|  g   | 문자열 내의 모든 패턴 검색             |
|  m   | 문자열의 행이 바뀌더라도 검색          |
|  s   | 모든 문자 정규식이 개행 문자 `\n` 포함 |
|  u   | 유니코드 전체를 지원                   |
|  y   | 문자 내 특정 위치에서 검색을 진행      |

### 특정 문자 숫자 매칭 패턴

|  Pattern   | Description                                                             |
| :--------: | ----------------------------------------------------------------------- |
|   a-zA-Z   | 영어 알파벳(-으로 범위 지정)                                            |
| ㄱ-ㅎ가-힣 | 한글 문자(-으로 범위 지정)                                              |
|    0-9     | 숫자(-으로 범위 지정)                                                   |
|     .      | 모든 문자열(숫자, 한글, 영어, 특수기호, 공백 모두) <br/> 단, 줄바꿈은 X |
|     \d     | 숫자                                                                    |
|     \D     | 숫자가 아닌 것                                                          |
|     \w     | 언더바를 포함한 영숫자 문자 `[A-Za-z0-9_]` 와 동일                      |
|     \W     | `\w` 가 아닌 것                                                         |

### 검색 기준 패턴

| **Symbol**  | Description                                                                                                          |
| :---------: | -------------------------------------------------------------------------------------------------------------------- |
|     \|      | OR, `a\| b`                                                                                                          |
|     []      | 괄호 안의 문자들 중 하나 <br/> `/abc/`: abc 포함 <br/> `/[abc]/`: a or b or c <br/> `[다-바]` : 다 or 라 or 마 or 바 |
| **[^문자]** | 괄호 안의 문자를 제외한 것 <br/> `[^ab]`: a, b 문자를 제외                                                           |
|      .      | 모든 문자열(숫자, 한글, 영어, 특수기호, 공백 모두) <br/> 단, 줄바꿈은 X                                              |
| **^문자열** | 특정 문자열로 시작 `/^www/`                                                                                          |
| **문자열$** | 특정 문자열로 끝남 `/com$/`                                                                                          |

### 갯수 반복 패턴

| **Symbol** | Description                                               |
| :--------: | --------------------------------------------------------- |
|     ?      | 없거나 최대 한 개                                         |
|     \*     | 없거나 있거나                                             |
|     +      | 최소 한개 또는 여러개                                     |
|    \*?     | 0개 이상의 문자와 매치 <br/> 가능한 적은 수의 문자와 매치 |
|     +?     | 1개 이상의 문자와 매치 <br/> 가능한 적은 수의 문자와 매치 |
|    {n}     | n개                                                       |
|   {Min,}   | 최소 Min개 이상                                           |
| {Min, Max} | 최소 Min개 이상, 최대 Max개 이하                          |

### 그룹 패턴

| **Symbol** | Description                                                  |
| :--------: | ------------------------------------------------------------ |
|     ()     | 괄호 안의 패턴을 하나의 단위로 취급 <br/> 결과를 따로 저장 O |
| (?: 패턴)  | 괄호 안의 패턴을 하나의 단위로 취급 <br/> 결과를 따로 저장 X |
|    (?=)    | 뒤에 특정 패턴이 오는 위치를 찾지만, 그 패턴은 결과에 포함 X |
|    (?!)    | 뒤에 특정 패턴이 오지 않는 위치를 찾는다.                    |
|    (?≤)    | 앞에 특정 패턴이 오는 위치를 찾지만, 그 패턴은 결과에 포함 X |
|   (?<!)    | 앞에 특정 패턴이 오지 않는 위치를 찾는다.                    |

### 필요한 정규 표현식 만들어보기

`//` 로 시작하고 `\n`로 끝나는 문자열의 사이에 있는 문자(최소 1글자 이상, 숫자 형식 X) 가져오기

```js
const regex = new RegExp(/^\/\/([^0-9]+)\n/gm);

// 작성한 정규 표현식 까보기
^\/\/: 줄의 시작(^)에 "//"가 있어야 한다.("/"를 문자 그대로 사용하고 싶을 때 이스케이프(\)해야 한다)
([^0-9]+): 숫자 형식을 제외한 모든 문자가 하나 이상 있어야 한다.
\n: "\n" 문자로 끝나야 한다.
/gm: 모든 문자를 검색하고, "\n" 줄바꿈 문자가 들어가기 때문에 다중 행 모드를 활성화한다.
```

</details>

## 🙂 Jest 테스트 코드 학습

<details>
<summary>자세히 보기</summary>

<a href="https://jestjs.io/docs/getting-started">Jest 공식 문서</a>

### Matchers

| Method                 | Description                                                    |
| :--------------------- | -------------------------------------------------------------- |
| toBe                   | 원시 값의 정확한 일치를 테스트                                 |
| toEqual                | 객체나 배열의 모든 속성을 재귀적으로 비교                      |
| not                    | Matcher의 결과를 반대로 테스트                                 |
| toBeNull               | null 값인지 테스트                                             |
| toBeUndefined          | 값이 정의되어 있는지 테스트                                    |
| toBoTruthy             | true로 평가되는 값인지 테스트                                  |
| toBoFalsy              | false로 평가되는 값인지 테스트                                 |
| toBeGreaterThan        | 주어진 값보다 큰지 테스트                                      |
| toBeGreaterThanOrEqual | 주어진 값보다 크거나 같은지 테스트                             |
| toBeLessThan           | 주어진 값보다 작은지 테스트                                    |
| toBeLessThanOrEqual    | 주어진 값보다 작거나 같은지 테스트                             |
| toBeCloseTo            | 부동 소수점 숫자를 비교할 때 사용                              |
| toMatch                | 문자열이 정규 표현식과 일치하는지 테스트                       |
| toContain              | 배열이나 순회 가능한 객체에 특정 항목이 포함되어 있는지 테스트 |
| toThrow                | 함수가 예외를 던지는지 테스트                                  |
| toHaveProperty         | 객체가 특정 속성을 가지고 있는지 테스트                        |
| toHaveBeenCalled       | 모의 함수가 호출되었는지 테스트                                |
| toHaveBeenCalledWith   | 모의 함수가 특정 인수로 호출되었는지 테스트                    |

### Mock Functions

| Method                 | Description                               |
| ---------------------- | ----------------------------------------- |
| mockReturnValue        | 모든 호출에 대해 지정된 값을 반환         |
| mockReturnValueOnce    | 다음 한 번의 호출에 대해 지정된 값을 반환 |
| mockImplementation     | Mock 함수의 구현을 제공                   |
| mockImplementationOnce | 다음 한 번의 호출에 대해 구현을 제공      |

### Custom Matchers

```js
const mockFn = jest.fn();
expect(mockFn).toHaveBeenCalled(); // 함수가 호출되었는지 확인
expect(mockFn).toHaveBeenCalledWith(arg1, arg2, ..); // 특정 인자로 함수가 호출되었는지 확인
expect(mockFn).toHaveBeenCalledTimes(3); // 함수가 지정된 횟수만큼 호출되었는지 확인
```

### `.mock` Property

| **Property**              | Description                                         |
| ------------------------- | --------------------------------------------------- |
| mockFn.mock.calls         | 모든 함수 호출의 인자를 포함하는 배열               |
| **mockFn.mock.results**   | 각 호출의 결과를 포함하는 배열                      |
| **mockFn.mock.instances** | new 키워드로 인스턴스화된 모든 인스턴스 객체의 배열 |

</details>

## 📝 코드 설계

<details>
<summary>자세히 보기</summary>

1.  유저 입력을 받는다.(출력 메세지를 인자로 넘겨준다. - `덧셈할 문자열을 입력해 주세요.`)

2.  유저 입력에서 이스케이프 시퀀스 문자열(`\n`)을 일관성 있게 처리한다.

3.  유저 입력을 커스텀 문자열, 숫자 문자열로 나눈다.

4.  나눈 커스텀 문자열을 기준으로 커스텀 구분자를 추출한다.

    4-1. 커스텀 구분자 형식에 맞지 않는다면 예외 처리한다.

    → `[ERROR] 커스텀 형식(//, \n 사이에 숫자 형식이 아닌 문자 1자 이상)에 맞게 입력해 주세요.`

5.  커스텀 구분자와 기본 구분자들을 기준으로 숫자 문자열을 분리한다.

    5-1. 기본 구분자, 커스텀 구분자 외의 구분자를 사용했다면 예외 처리한다.

    → `[ERROR] 기본 구분자, 커스텀 구분자 외에 구분자는 사용할 수 없습니다.`

    5-2. 분리하였을 때 모든 숫자가 양수로 구성되어 있지 않다면 예외 처리한다.

    → `[ERROR] 분리된 숫자는 모두 양수여야 합니다.`

6.  분리 된 숫자의 합을 구한다

7.  분리 된 숫자의 합을 출력한다.

</details>

## 🐱 Git 커밋 컨벤션

<details>
<summary>자세히 보기</summary>

|   Type   | Description                                           |
| :------: | ----------------------------------------------------- |
|   init   | 초기 설정                                             |
|   feat   | 새로운 기능 추가                                      |
|   fix    | 버그 수정                                             |
| refactor | 코드 리팩토링                                         |
| comment  | 필요한 주석 추가 및 변경                              |
|  chore   | 패키지 매니저 수정, 그 외 기타 수정 ex) `.gitnore` 등 |
|  rename  | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우    |
|  remove  | 파일을 삭제하는 작업만 수행한 경우                    |
|   docs   | 문서 수정                                             |
|   test   | 테스트 코드 작성 및 수정                              |

</details>

## 📂 폴더 구조

<details open>
<summary>자세히 보기</summary>

```js
📦src
 ┣ 📂constants // 상수 모음
 ┃ ┣ 📜index.js // constants 배럴 파일
 ┃ ┣ 📜message.js // 메세지 관련
 ┃ ┗ 📜separator.js // 구분자 관련
 ┣ 📂utils // 유틸 함수 모음
 ┃ ┣ 📜console.js // 콘솔 관련
 ┃ ┣ 📜index.js // utils 배럴 파일
 ┃ ┣ 📜number.js // 숫자 관련
 ┃ ┣ 📜parse.js // 파싱 관련(특정 타겟을 파싱해서 새로운 값을 리턴)
 ┃ ┣ 📜separator.js // 구분자 관련
 ┃ ┗ 📜validate.js // 유효성 검사 관련
 ┣ 📜App.js // 애플리케이션 정의
 ┗ 📜index.js // 시작 할 파일
```

</details>

## 🎯 구현 할 기능 목록

<details open>
<summary>자세히 보기</summary>

- [x] 유저 입력 받기

- [x] 입력받은 문자열을 파싱해서 커스텀 문자열, 숫자 문자열로 나누기

- [x] 커스텀 문자열에서 커스텀 구분자 파싱하기

  - [x] 커스텀 구분자 형식에 맞지 않는다면 예외처리

- [x] 커스텀 구분자와 기본 구분자를 기준으로 분리하기

  - [x] 분리하였을 때 모든 숫자가 양수로 구성되어 있지 않다면 예외처리

- [x] 분리된 숫자의 합을 구한다.

- [x] 분리된 숫자의 합을 출력한다.

</details>

## 🚨 트러블 슈팅

<details>
<summary>자세히 보기</summary>

### `\n` 문자는 콘솔 입력 방식과 일반 문자열에 해석 방식이 다르다.

### 문제 상황

유저 입력으로 `//a\n1a1` 를 입력하고 커스텀 구분자 파싱하는 함수에 넣으면 제대로 파싱이 되지 않고 있다.

하지만, 문자열 하드 코딩으로 `//a\n1a1` 을 넣으면 정상적으로 커스텀 구분자를 파싱하고 있는 상황이다.

### 문제의 원인 알아보기

가장 의심이 가는 부분이 개행 문자(`\n`)였다. 이스케이프 시퀀스 때문에 이상하게 동작할 수 있기 때문에 이것을 하드 코딩한 문자열과 비교해보았다.

```js
const userInput = await Console.readLineAsync(MESSAGES.USER_INPUT);
// 입력으로 //a\n1a1을 넣어주었다.
console.log(userInput === "//a\n1a1"); // false
// 결과는 false가 나왔다. 조금 더 정확하게 비교하기 위해 charCodeAt 메서드를 사용하였다.

// [47, 47, 97, 92, 110, 49, 97, 49]
console.log([...userInput].map((c) => c.charCodeAt(0)));
// [47, 47, 97, 10, 49, 97, 49]
console.log([..."//a\n1a1"].map((c) => c.charCodeAt(0)));
// 개행 문자(\n) 부분이 다르게 해석되는 것을 볼 수 있다.

// 확실하게 확인하기 위해 위에서 얻은 유니코드 값으로 해당하는 문자열 확인해보았다.
const test1 = [...userInput].map((c) => c.charCodeAt(0));
const test2 = [..."//a\n1a1"].map((c) => c.charCodeAt(0));

// ['/', '/', 'a', '\\', 'n', '1', 'a', '1']
console.log(test1.map((c) => String.fromCharCode(c)));
// ['/', '/', 'a', '\n' '1' 'a', '1']
console.log(test2.map((c) => String.fromCharCode(c)));
// 콘솔 창을 통해 입력한 문자열은 개행 문자를 그대로 표현하기 위해 \\ 따로 n 따로 해석하고 있다.
// 하드 코딩한 문자열은 \n 개행 문자를 그대로 해석하고 있다.
```

**이렇게 두 방식이 해석 방법이 다르기 때문에 정상적으로 파싱이 되지 않고 있었다.**

### 문제 해결 방법

해결은 비교적 간단하다. 위에서 알아본 것 처럼 `\\n` 로 해석된 것을 `\n`로 바꿔주기만 하면 된다.

```js
const userInput = await Console.readLineAsync(MESSAGES.USER_INPUT);
const userInputString = userInput.replaceAll("\\n", "\n");
```

</details>

## 😮 배운 것들

<details>
<summary>자세히 보기</summary>

### 🥊 RegExp 생성자 vs 리터럴 방식

```js
// RegExp 생성자
const regex = new RegExp(/^\/\/([^0-9]+)\n/gm);

// 리터럴 방식
const regex = /^\/\/([^0-9]+)\n/gm;
```

RegExp 생성자

- 동적으로 정규 표현식을 생성할 때 유용하다.
- **런타임에 정규 표현식이 컴파일된다.**
- 정규 표현식 패턴이 변경되거나, 사용자 입력과 같은 외부 소스에서 패턴을 가져올 때 사용된다.

리터럴 방식

- 정적인 정규 표현식을 생성할 때 주로 사용된다.
- **표현식이 평가될 때 정규 표현식이 컴파일된다.**
- 정규 표현식이 변경되지 않을 때 사용하면 성능상 이점이 있다.

### 🥊 every 함수 vs some 함수

```js
// 모두 양수라면 true, 아니라면 false

// every함수 버전
const isAllPositive = (numberArray) => {
  return numberArray.every((num) => num > 0);
};

// some 함수 버전,
const isAllPositive = (numberArray) => {
  return !numberArray.some((num) => num <= 0);
};
```

- `every`: 모든 요소가 조건을 만족하는지 체크
- `some`: 하나 이상의 요소가 조건을 만족하는지 체크

**지금 상황에서는 `every` 함수가 모두 양수인지 체크하는 목적성이 더 잘 드러나는 것 같다.**

### 🥊  **isNaN vs Number.isNaN**

```js
isNaN("A"); // true
isNaN(NaN); // true
isNaN("123"); // false

Number.isNaN("A"); // false
Number.isNaN(NaN); // true
Number.isNaN("123"); // false
```

- `isNaN` : 인자를 숫자로 변환한 후 NaN인지 확인한다.
  - 숫자로 변환할 수 없는 값에 대해 `true` 를 반환한다.
- `Number.isNaN` : 인자를 변환하지 않고 정확히 NaN 값인지만 확인한다.
  - 오직 NaN에 대해서만 `true` 를 반환한다.

**타입 상관없이 숫자인지 체크할 때 `isNaN` 을 사용하고, 숫자타입과 NaN을 체크할 때는 `Number.isNaN` 을 사용하면 될 것 같다.**

### 🥊 indexOf vs search

- 문자열의 인덱스를 찾기 위해 `indexOf` 를 사용했는데 `indexOf` 는 인자에 정규 표현식을 허용하지 않고 문자열만 받기 때문에 정규 표현식을 사용하면 원하는 값을 찾지 못한다.

- 반면 `search` 는 정규 표현식과 문자열을 모두 인자로 받기 때문에 정규 표현식을 사용하려면 `search` 메서드를 사용해야 한다.

```js
const string = "Hello World";

console.log(string.indexOf("World")); // 6
console.log(string.search("World")); // 6

console.log(string.indexOf(/world/i)); // -1, 정규 표현식을 문자열로 변환하여 찾지 못함
console.log(string.search(/world/i)); // 6
```

</details>
