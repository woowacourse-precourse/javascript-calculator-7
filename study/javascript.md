# Javascript

**charactor escape**

[참고자료](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)

문자 이스케이프는 문자 그대로 표현할 수 없는 문자를 표현할때 사용된다  
백슬레시(\\)를 활용해서 특수문자를 표현해야하는 경우나 정규 표현식을 작성할때 주로 사용한다

**character class escape**

[참고자료](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)

문자 집합을 나타내는 escape 시퀀스

###### syntax

```javascript
\d
모든 숫자 문자와 일치한다
[0-9]랑 동일한 기능

\w
모든 단어 문자를 일치시킨다.
(A-Z, a-z), (0-9), (_)를 포함한다
정규식이 유니코드를 인식하고 flag가 i로 설정되어 있을 경우 case folding으로 통해서
다른 유니코드 문자도 일치시킨다

\s
공백 또는 line terminator 문자와 일치시킨다

\D, \W \S는 각 syntax에 해당하지 않는 문자를 일치 시킨다
ex) \D 는 숫자를 제외한 모든 문자열을 일치시킨다

```

---

**Regular expressions**

[참고자료](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

정규표현식은 문자열의 문자 조합을 일치시키는데 사용되는 패턴이다.  

##### 작성법

- literal

```
const regexp = /패턴을 작성/;
```

> literal 방식은 정규식이 일정하게 유지되는 경우에 사용하면 성능을 향상 시킬 수 있다

- constructor

```
const regexp = new RegExp('패턴을 작성');
```

> 생성자 함수를 이용하는 경우는 정규식 패턴이 변경될 것이 예상되거나, 패턴을 사용자 입력과 같은 다른 소스에서 가져오는 경우에 사용된다

##### method

- RegExp

    1. exec()

    > 문자열에서 일치하는 항목이 있는지 검색  
    일치하지 않는 경우 정보 배열을 반환하거나 null을 반환

    2. test()

    > 문자열에서 일치하는 항목이 있는지 테스트.  
    ture / false를 반환

- String

    1. match()

    > 문자열에서 일치하는 모든 항목이 포함된 배열을 반환  
    일치하는 항목이 없을 경우 null을 반환

    2. matchAll()

    > 캡쳐 그룹을 포함한 모든 결과의 iterator를 반환한다

    ```javascript
    const text = "The quick brown fox jumps over the lazy dog.";  

    const regex = /(quick|lazy)/g;

    const matches = [...text.matchAll(regex)];

    console.log(matches);

    [
      [
        'quick',
        'quick',
        index: 4,
        input: 'The quick brown fox jumps over the lazy dog.',
        groups: undefined
      ],
      [
        'lazy',
        'lazy',
        index: 35,
        input: 'The quick brown fox jumps over the lazy dog.',
        groups: undefined
      ]
    ]
    ```

    3. search()

    > 일치하는 항목의 인덱스를 반환하고, 검색에 실패하면 -1을 반환

    4. replace()

    > 일치하는 항목을 검색하고 그 부분의 첫번째 문자열만 대체 부분 문자열로 변환  
    기존의 문자열은 변하지 않는다

    5. replaceAll()

    > 일치하는 항목을 검색하고 모든 부분 문자열을 대체 부분 문자열로 변환

    6. split()

    > 정규식 또는 고정 문자열을 사용하여 문자열을 하위 문자열 배열로 분할

문자열 내에 패턴의 존재 여부를 알고 싶을떄는  
test(), search()  

자세한 정보를 얻으려면(실행 속도는 느림), 반환값: 배열  
exec(), match()  

#### flags를 활용한 고급 검색

> flag는 여러개 작성이 가능하다

```javascript
d
일치하는 하위 문자열의 index를 생성

g
전역 검색

i
대소문자를 구분하지 않는 검색

m
^와 $ 를 허용해서 검색

s
.를 허용

u
"유니코드"; 패턴을 유니코드 코드 포인트의 시퀀스로 취급

v
더 많은 유니코드 기능이 포함된 u모드로 업그레이드

y
대상 문자열의 현재 위치에서 시작하여 고정 검색을 수행

```

**작성법

```javascript
- literal
const regex = /패턴/flag;

- constructor
const regex = new RegExp('패턴', 'flag')

```