# javascript-calculator-precourse : 문자열 덧셈 계산기

## 구현할 기능 목록

### 문자열 덧셈 계산기 기본 기능

#### 1. 기본 입출력 기능

- [-] 사용자가 더하기 계산을 하고 싶은 값들을 입력 가능하게 한다.
- [-] 계산된 숫자 결과는 표시되어야 한다.

#### 2. 기본 구분자 계산

- [-] 입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.
  - [-] 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
    - 예: `"" => 0`, `"1,2" => 3`, `"1,2,3" => 6`, `"1,2:3" => 6`

#### 3. 계산기 커스텀 구분자 계산

- [-] 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 `//`와 `\n` 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  - 예: `"//;\n1;2;3"`을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.

#### 4. 에러 핸들링

- [-] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.
  - [-] 사용자가 빈값을 입력할 경우 0 을 반환한다.
  - [-] 사용자가 양수가 아닌 값을 입력할 경우 에러를 던진다.

### 5. 추가 작업

- [ ] 작성한 코드를 역할 단위로 분리한다.
- [ ] 테스트 코드를 추가하여 다양한 입력을 확인하고 보완한다.

### 입출력 요구 사항

#### 입력

- 구분자와 양수로 구성된 문자열

#### 출력

- 덧셈 결과

```bash
결과 : 6
```

### 실행 결과 예시

```bash
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```
