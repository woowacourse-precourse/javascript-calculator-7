# Markdown

[참고자료](https://www.markdownguide.org/)

## Syntax

**Heading**

```
# 제목
## 부제목
### 부부제목
```

**Bold**

```
**여기 사이에 텍스트를 작성**
```

**Link**

```
[링크를 설명할 텍스트를 여기에 작성하고](여기에 패키지 파일의 경로 또는 URL을 작성)
```

**Line**

```
줄바꿈을 할때는
텍스트 뒤에  이렇게
space를 두번 입력

또는 텍스트 사이에<br>을 작성한다
```

**List**

> **Ordered List**
> ```
> 1. 숫자와
> 2. .을 작성해서
> 3. list를 작성한다
> 4. indent를 활용해서
>   1. 하위 리스트도 작성이 가능하다
> 
> 1) parenthesis를 사용해서
> 2) list 작성이 가능하다
> ```

> **Unorder List**
> ```
> - dash 또는
> * asterisks 또는
> + plus sign을 활용해서 작성한다
>   - indent를 활용해서 하위 리스트도 작성이 가능하다
> ```


**Fenced Code Block**

```
백틱을 3번 작성한다(
  ```여기에 코드를 작성```
  )


```

**Blockquote**

```
> 를 활용한다
>> 추가 입력을 해서 텍스트의 구분이 가능하다
>>> 내부에 다른 요소들의 입력도 가능하다
>>> ## 부제목
> # 제목 이런식으로 활용이 가능하다
```

## 사용법 및 권장 작성 방법

- Heading 작성시 텍스트 전에 빈칸을 띄운다
- Heading 작성시 줄을 띄운 후 아래에 텍스트를 작성한다

---

- Bold 작성시 under bar(_)를 두번 입력해서 작성해도 되지만 markdown 애플리게이션의 호환성에서 문제가 생기기 때문에 asterisks(*)를 활용한다

---

- Fenced Code Block의 indent는 4개의 space 또는 1번의 tab으로 구분한다
- Fenced Code Block내부에 list가 존재할 경우 indent를 8개의 space 또는 2번의 tab으로 구분한다

---

- Ordered List 사용시 parenthesis())는 가벼운 markup languages에서 가끔 사용이 되지만, 호환성의 문제로 인해 사용을 지양한다

---

- Unordered List 사용시 기호를 섞어서 사용하지 않는다 (- , + , *) 중에서 하나를 선택해서 통일한다

---

- Blockquotes를 작성할때 호환성을 위해서 > 를 작성하기 전에 입력된 텍스트 밑의 line을 띄워서 작성한다