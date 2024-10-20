# javascript-calculator-precourse

## 구현목록

---

### 입력

---

#### 사용자가 입력한 문자열을 반환

[getAddInput](https://github.com/thumbthing/javascript-calculator-7/blob/thumbthing/src/UI/getAddInput.js)

- 동작 과정

1. 비동기로 유저의 입력값을 받아서 변수에 저장
2. 변수를 반환

* 에러처리

1. 유저의 입력값을 받는 과정에서 오류가 발생했을 경우
    1. 에러메시지 변수를 선언
    2. 에러메시지를 활용해서 새로운 에러 객체를 생성
    3. 에러 객체를 반환

### 입력값 검수

---

- 입력된 문자열을 검수  
  1. 커스텀 구분자의 존재 유무
      - 커스텀 구분자의 유효성 검사
  2. 구분자(기본, 커스텀)를 기준으로 입력값을 문자열 -> 배열로 변환
  3. 배열로 변환된 입력값의 유효성 검사
      - 문자열 -> 숫자로 변환이 가능한 입력값인지
      - 구분자(기본, 커스텀) 이외의 구분자의 존재 유무
  4. 유효성을 통과한 변환값을 반환

#### 입력받은 문자열을 변환하여 반환

[userInputSeparator](https://github.com/thumbthing/javascript-calculator-7/blob/thumbthing/src/feature/converter/stringConverter.js)

구현 기능 목록

> ##### getCustomSeparatorCharacter  
>  
> 매개변수: customText  
> - 커스텀 구분자로 판별된 문자열의 총 길이를 상수에 저장 (상수명: CUSTOM_TEXT_LENGTH)  
> - 커스텀 구분자의 입력 형식(// 커스텀 구분자 \n)을 알고 있으므로 index값으로 구분이 가능하다고 판단됨  
> - 커스텀 구분자의 마지막 index를 상수에 저장(상수명: CUSTOM_TEXT_ACTUAL_RANGE)  
> - slice 메소드를 활용하여 커스텀 문자열의 실제 시작 index(2)와 커스텀 구분자의 마지막 index로 실제 커스텀 구분자를 변수에 저장(변수명: resultSeparator)
> - resultSeparator를 반환

> ##### verifyCustomSeparator  
> 
> 매개변수: text  
> - 커스텀 구분자의 입력 형식 (// 구분자 \n)를 판별하기 위해 정규식을 선언  
>  - search 메소드의 검색 실패시 반환되는 -1을 상수로 선언 (상수명: IS_NOT_CUSTOM)  
> - 반환할 데이터의 초기 값을 선언 (사용 자료구조: Map, 상수명: RESULT 초기값: null)  
> - if else 를 활용하여 커스텀 구분자의 입력 유무에 대해서 판별 후 반환할 결과값을 분기처리  
>   
>> - **커스텀 구분자가 존재하지 않을 경우**  
>> - RESULT의 유저입력값을 기존 매개변수를 대입하여 반환  
>  
>> - **커스텀 구분자가 존재할 경우**  
>> - match 메소드를 활용하여 커스텀 구분자가 존재하는 모든 요소들의 배열을 변수에 저장 (변수명: customText)  
>> - getCustomSeparatorCharacter()를 호출하여 커스텀 구분자의 문자열을 변수에 저장 (변수명: resultCustomSeparator)  
>> - replace 메소드를 활용하여 RESULT에 저장할 커스텀 입력형식을 제외한 문자열을 변수에 저장 (변수명: calculateString)  
>> - resultCustomSeparator, calculateString 을 RESULT에 저장  
>> - RESULT를 반환

> ##### userInputSeparator  
>  
> - 기본 구분자를 배열 형태의 상수로 선언(상수명: SEPARATORS)  
> - verifyCustomSeparator()를 호출하여 커스텀 구분자와 계산해야할 문자열을 변수에 저장 (변수명: customSeparatorResult)  
> - if else 를 활용하여 커스텀 구분자가 존재여부에 따라서 분기 처리  
>  
>> - **커스텀 구분자가 존재하지 않을 경우**  
>> - 정규표현식 생성자를 활용하여 정규식을 생성
>>> - join 메소드를 활용하여 SEPARATORS 배열을 문자열로 변환하여 생성 후 상수를 선언 (상수명: SEPARATOR_REGEX)  
>> - split 메소드를 활용하여 SEPARATOR_REGEX를 기준으로 유저의 입력값을 문자열형식의 배열로 변환하여 변수에 저장 (변수명: userStringArray)  
>> - map 메소드를 활용하여 입력값의 유효성을 검사
>>> - 변환한 값이 NaN일 경우를 판단
>>> - **NaN일 경우**  
>>> - 에러 메시지를 변수로 선언(변수명: errorMessage)  
>>> - errorMessage를 활용하여 Error 객체를 생성(상수명: ERROR)  
>>> - ERROR를 throw
>> - userStringArray 를 반환
>
>> - **커스텀 구분자가 존재할 경우**  
>> - SEPARATORS 배열에 커스텁 구분자를 push  
>> - 정규표현식 생성자를 활용하여 정규식을 생성
>>> - join 메소드를 활용하여 SEPARATORS 배열을 문자열로 변환하여 생성 후 상수를 선언 (상수명: SEPARATOR_REGEX)  
>> - split 메소드를 활용하여 SEPARATOR_REGEX를 기준으로 유저의 입력값을 문자열형식의 배열로 변환하여 변수에 저장 (변수명: userStringArray)  
>> - userStringArray 를 반환

### 입력값 변환

---
1. 문자열을 배열로 변환  
    1. 기본 구분자 (, / :)를 사용해서 변환
    2. 커스텀 구분자를 사용해서 변환
2. 배열 내의 요소를 문자열 -> 숫자로 변환


### 입력값 계산

---

변환된 입력값을 덧셈으로 계산하여 결과값을 반환


### 에러 처리

---

1. 커스텀 구분자의 유효성
2. 입력값의 유효성  

## Commit Message

---

- feat
- fix
- docs
- style
- refactor
- test
- chore

## Directory tree

```zsh
├── App.js
├── UI
│   ├── getAddInput.js
│   └── resultUI.js
├── feature
│   ├── caculate
│   │   └── inputAdder.js
│   ├── converter
│   │   ├── arrayConverter.js
│   │   └── stringConverter.js
│   └── error
│       └── errorHandler.js
└── index.js
```

## 추가적인 학습 목록

[Markdown](https://github.com/thumbthing/javascript-calculator-7/blob/thumbthing/study/markdown.md)

[vscode](../study/vscode.md)

[Git](https://github.com/thumbthing/javascript-calculator-7/blob/thumbthing/study/git.md)

[JavaScript](https://github.com/thumbthing/javascript-calculator-7/blob/thumbthing/study/javascript.md)

[프리코스 회고록](https://github.com/thumbthing/javascript-calculator-7/blob/thumbthing/study/retrospective.md)