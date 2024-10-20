# javascript-calculator-precourse
---------------------------------

## 프로그램 흐름 정리
### 1. 입력받기
>'덧셈할 문자열을 출력해주세요.' 안내 출력 후, 사용자의 입력을 기다려야 한다.

### 2. 입력분석하기
[연산이 가능하도록 해야 하는 경우]
>ex: 아무런 문자열도 입력하지 않는 경우("") -> 0을 반환한다.<br />
>ex: 1:::2:4 와 같이 구분자가 중복되는 경우 -> 연산이 이루어지도록 한다.<br />
>ex: ,,,,1,,,3,,,5,, 와 같이 문자열의 앞뒤로 구분자가 있는 경우 -> 연산이 이루어지도록 한다.<br />
>ex: //%^\n와 같이 사용자가 커스텀 구분자를 여러개로 설정하는 경우 -> 하나로 묶여 구분자가 되도록 한다.<br />
>ex: 사용자가 ///\n, //\n\n와 같이 / 또는 \n를 구분자로 설정하는 경우 -> 구분자가 되도록 한다.<br />
>ex: 사용자가 커스텀 구분자와 기본 구분자를 혼용하는 경우 -> 연산이 이루어지도록 한다.<br />

[ERROR를 반환해야 하는 경우]
>ex: 사용자가 입력한 숫자에 음수가 있는 경우 -> [ERROR] 양수로만 이루어져야 합니다.<br />
>ex: //&\n와 같이 사용자가 커스텀 구분자만 입력하고 숫자부분을 입력하지 않는 경우 -> [ERROR] 잘못된 입력 형식입니다.<br />
>ex: 사용자가 커스텀 구분자 또는 기본 구분자 외 알 수 없는 구분자를 사용하는 경우 -> [ERROR] 숫자가 아닌 값이 포함되었습니다.<br />

### 3. 결과 출력
[연산이 가능한 경우] <br />
결과 : ${결과} <br />
[ERROR를 반환해야 하는 경우] <br />
[ERROR] ${error message} <br />


## 구현할 기능 목록 정리
>빈 문자열 입력 처리 기능 추가<br />
>쉼표 구분자로 숫자 분리 및 합산 기능 추가<br />
>콜론 구분자로 숫자 분리 및 합산 기능 추가<br />
>커스텀 구분자 지원 기능 추가<br />
>숫자가 아닌 값 또는 잘못된 입력 처리 추가<br />
>음수 값에 대한 오류 처리 추가<br />
>커스텀 구분자와 기본 구분자를 혼용할 수 있도록 기능 추가<br />

### 브랜치 전략
>0. bewheneverwhatiwant 브랜치와 dev 브랜치를 사용하여 프로젝트를 관리할 것이다.<br />
>1. 구현할 기능의 목록을 정리한다.<br />
>2. 기능 단위로 Github 이슈를 발행한다.<br />
>3. 기능 단위로 Github 브랜치를 생성한다.<br />
>4. 기능의 구현이 완료된 브랜치는 이슈를 닫는다.<br />
>5. 기능의 구현이 완료된 브랜치는 dev에 merge 후 삭제한다.<br />
>6. 오류가 발생하면, 오류에 대한 이슈를 먼저 발행한다.<br />
>7. 오류에 대한 브랜치를 생성한다.<br />
>8. 오류를 해결 후 이슈를 닫는다.<br />
>9. 해결된 오류의 브랜치는 dev에 merge 후 삭제한다.<br />
>10. 최종적으로 dev가 bewheneverwhatiwant 브랜치에 합쳐지도록 한다.<br />
>11. pr을 보내어 1주차 프리코스를 마무리한다.<br />

>[수정]<br />
>커밋 시 이슈 자동 닫힘은 main 브랜치에 PR 또는 병합 시에만 가능하다<br />
>프리코스 규칙에 따라 main 브랜치가 아닌 bewheneverwhatiwant 브랜치를 사용한다<br />

### 디렉토리 구조

>src
>ㄴApp.js
>ㄴfuntions // App에서 쓰이는 3개의 함수 분리
>    ㄴgetInput.js
>    ㄴprintResult.js
>    ㄴaddFunctions
>        ㄴparseInput.js // 입력값 파싱 함수 분리
>        ㄴvaludateNumber.js // 숫자 검증 함수 분리

![디렉토리 구조](image.png)