# javascript-calculator-precourse

## 구현할 기능 목록

### 1. 덧셈할 문자열을 입력받는다.

- <code>@woowacourse/mission-utils</code>의 <code>Console.readLineAsync</code>사용해 문자열을 입력받는다.
- 빈 문자열일 경우엔 0을 리턴한다.

### 2. 커스텀 문자열이 있는지 검사한다.

  1. 여러 개가 있는 경우를 대비해 리스트로 구분자를 탐색한다.
- 반복문을 돌며 스택에 <code>//</code>는 push하고 <code>\n</code>는 pop한다.
- pop할 때 커스텀 문자열을 <code>customedSeparator</code> 리스트에 저장한다.
- 만약 올바르지 않은 문자열이라면 <code>[ERROR]</code>를 던진다.

### 3. 에러를 재검사한다.

- 커스텀 구분자를 저장하는 리스트에 남은 문자열이 있다면 <code>[ERROR]</code>를 던진다.

### 4. 커스텀 구분자가 있을 때

1. 커스텀 문자열이 있는 경우 그것을 기준으로 split한다.
2. 여러 개가 있는 경우 정규식으로 묶어서 split한다.
3. 반복문을 돌며 숫자가 아니거나 다른 구분자인 경우엔 <code>[ERROR]</code>를 던진다.
4. 그렇지 않은 경우 문자열을 숫자로 변환한다.
5. <code>sum</code>에 더한다.

### 5. 커스텀 구분자가 없을 때

1. 쉼표 또는 콜론 기준으로 split한다.
2. 반복문을 돌며 숫자가 아니거나 다른 구분자인 경우엔 <code>[ERROR]</code>를 던진다.
3. 그렇지 않은 경우 문자열을 숫자로 변환한다.
4. <code>sum</code>에 더한다.

### 6. 결과 출력

1. 사용자가 잘못된 값을 입력했을 때 <code>[ERROR]</code>를 띄운다.
2. 올바른 값일 때 <code>결과 : x</code>에 따라 값을 출력한다.