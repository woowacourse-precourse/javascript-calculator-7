# javascript-calculator-precourse

## 기능 목록

### 입력 및 출력
- 구분자(`,`, `:`, 커스텀 구분자)와 양수로 구성된 문자열

[x] **[1] 입력 안내 메시지 출력**

`“덧셈할 문자열을 입력해 주세요.\n”`

[] **[2] 입력받기**
- [x] 사용자가 한 번 입력 시 입력 값 반환

[] **[3] 커스텀 구분자 부분과 연산에 필요한 문자열 부분 분리**
- [x] 커스텀 구분자가 없을 때 빈 문자열과 연산 문자열 반환
- [x] 커스텀 구분자가 1개일 때 구분자 문자열과 연산 문자열 반환
- [x] 커스텀 구분자가 여러개일 때 구분자 문자열과 연산 문자열 반환

[] **[4] 입력값 검증**

사용자가 잘못된 값을 입력할 경우 `"[ERROR]"`로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션 종료

- [] 연산 문자열 검증
    - [x] 연산 문자열이 쉼표, 콜론, 양수로 이루어져 있으면 입력값 그대로 반환
    - [x] 연산 문자열이 등록된 구분자와 양수로 이루어져 있으면 입력값 그대로 반환
    - [x] 연산 문자열에 0이 포함되어 있으면 `IncludeZeroError` 에러 반환
    - [x] 연산 문자열에 등록되지 않은 구분자가 포함되어 있으면 `InvalidSeparatorError` 에러 반환
- [] 커스텀 구분자 문자열 검증
    - [x] 커스텀 구분자가 문자로 이루어져 있으면 입력값 그대로 반환
    - [x] 커스텀 구분자로 숫자가 입력되면 `InvalidCustomSeparatorError` 에러 반환

[] **[5] 출력**
- [] 에러 발생 시 에러메시지 출력
    - [] `IncludeZeroError` 에러 발생 시 `"[ERROR] 입력 값에 0이 포함되어 있습니다.\n 구분자와 양수로 구성된 문자열을 입력해주세요."` 에러 메시지 출력
    - [] `InvalidSeparatorError` 에러 발생 시 `"[ERROR] 입력 값에 등록되지 않은 구분자가 포함되어 있습니다.\n 문자옆 앞부분의 "//"와 "\n" 사이에 커스텀 구분자를 입력하거나, 덧셈할 문자열에 구분자와 양수만 포함되도록 입력해주세요."` 에러 메시지 출력
    - [] `InvalidCustomSeparatorError` 에러 발생 시 `"[ERROR] 커스텀 구분자는 문자로 입력해주세요."` 에러 메시지 출력
- [] 그 외의 경우 정상값 출력

    ```bash
    결과 : ${답}
    ```

### 구분자와 숫자 식별, 숫자 합 구하기

- 커스텀 구분자: `"//"` 와 `"\n"` 사이에 위치하는 문자

[] **[1] 커스텀 구분자가 정의되어 있다면 등록**
- [x] 커스텀 구분자가 없을 때 등록하지 않음
- [x] 커스텀 구분자 1개 등록
- [x] 커스텀 구분자 여러 개 등록

[] **[2] 구분자를 기준으로 숫자 분리**
- [x] 쉼표를 포함한 문자열에서 숫자 분리
- [x] 쉼표, 콜론을 포함한 문자열에서 숫자 분리
- [x] 쉼표, 콜론, 커스텀 구분자를 포함한 문자열에서 숫자 분리

[x] **[3] 숫자의 합 구하기**
- [x] 빈 배열이 주어졌을 때 0 반환
- [x] 숫자 배열이 주어졌을 때 숫자의 합 반환