# javascript-calculator-precourse

## 구현할 기능 목록

### 1. 덧셈할 문자열을 입력받는다.

- <code>@woowacourse/mission-utils</code>의 <code>Console.readLineAsync</code>사용해 문자열을 입력받는다.
- 커스텀 구분자가 포함된 부분을 삭제한 결과가 빈 문자열이라면 0을 출력하고 반환한다.

### 2. 커스텀 문자열이 있는지 검사한다.

 커스텀 구분자는 여러개가 있는 경우를 대비해 <code>customSeparator</code>리스트에 저장하는 것으로 한다.

- 반복문을 돌며 <code>//</code>일 때 <code>pushedCustomStr</code>에 1을 push한다. 
  - 만약 <code>pushedCustomStr</code>의 길이가 0이 아니라면 push하지 않고 넘어간다.
<br/>
- <code>\n</code>일 때 스택에 1이 존재하면 pop한다.
  - 이때 커스텀 구분자를 <code>customSeparator</code>리스트에 저장한다.
  - 만약 pop한 후에 스택이 비어 있지 않다면 에러를 던진다.

### 3. 에러를 재검사한다.

- 커스텀 구분자를 저장하는 리스트에 남은 문자열이 있다면 구분자 중에 <code>//</code>가 포함된 구분자가 있는지 확인한다.
- 만약 없다면 에러를 던진다.

### 4. 커스텀 구분자가 있을 때

1. 특수문자를 모두 처리한다.
2. 긴 구분자 기준으로 정렬하여 구분자들을 합친 정규식을 만든다.
3. 커스텀 구분자가 포함된 문자열을 삭제한다.
4. 위에 삭제되고 남은 문자열을 정규식 기준으로 split한다.
5. 여기서 콜론이나 쉼표가 존재한다면
5-1. 해당 문자열을 <code>VALIDATE_NUMBER</code>로 검증한 뒤 숫자를 sum에 더한다.
5-2. 없다면 전체 문자열을 기준으로 <code>VALIDATE_NUMBER</code>로 검증한 뒤 숫자를 sum에 더한다.

**VALIDATE_NUMBER** 함수
- 문자열이 공백이거나 변환 시 숫자가 아닌 경우 에러 던짐.
- 문자열 마지막이 <code>.</code>로 끝날 시 에러 던짐.
- 문자열을 숫자로 변환 시 양수가 아닐 시에 에러를 던짐.
- 위 세 가지 경우가 아닐 때 숫자를 반환.

### 5. 커스텀 구분자가 없을 때

1. 쉼표 또는 콜론 기준으로 split한다.
2. <code>VALIDATE_NUMBER</code>로 검증한 뒤 합을 구한다.

### 6. 결과 출력

1. <code>결과 : x</code>에 따라 값을 출력한다.
2. 사용자가 잘못된 값을 입력했을 때 <code>[ERROR]</code>를 띄운다.

