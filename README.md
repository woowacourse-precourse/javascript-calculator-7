# 문자열 계산기

이 프로젝트는 입력된 문자열에서 숫자를 추출하여 합계를 계산하는 계산기를 구현합니다.

## 기능 설명

### 1. 기본 구분자를 이용한 계산 - (feat/basic-split)

-   쉼표(,) 또는 콜론(:)을 구분자로 사용하여 문자열을 분리하고, 각 숫자의 합을 반환합니다.

예시:

-   `""` => 0
-   `"1,2"` => 3
-   `"1,2,3"` => 6
-   `"1,2:3"` => 6

### 2. 커스텀 구분자 지원 - (feat/custom-split)

-   기본 구분자(쉼표, 콜론) 외에 사용자가 커스텀 구분자를 지정할 수 있습니다.
-   커스텀 구분자는 문자열 앞부분의 `//`와 `\n` 사이에 위치하는 문자로 정의됩니다.

예시:

-   `"//;\n1;2;3"` => 6 (세미콜론(;)이 커스텀 구분자로 사용됨)

### 3. 에러 처리 - (feat/error-handling)

-   사용자가 잘못된 값을 입력할 경우, `[ERROR]`로 시작하는 메시지와 함께 `Error`를 발생시킵니다.
-   에러 발생 후 애플리케이션은 종료됩니다.
