# javascript-calculator-precourse
## ✅ 구현 기능 목록
- [x] 문자열 입력 받기
- [x] 커스텀 구분자 처리
- [ ] 문자열 구분자로 구분
- [ ] 구분한 문자가 숫자인지 확인
- [ ] 추출한 숫자 더하기
- [ ] 잘못된 값 입력한 경우 에러 처리 & 종료

## 📚 공부
- [x] git 커밋 메시지 공부
- [x] Console API 공부
    - [ ] 입력받을 때 Async 왜 사용하는지?
- [ ] 정규표현식 정리

## 💻 구현 내용
### 문자열 입력 받기
```
  async getString(){
    try{
      const inputStr = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요\n');
      return inputStr;
    } catch(error){
      Console.print('Error: ' + error.message);
      return null;
    }
  }
```
- @woowacourse/mission-utils에서 제공하는 Console API를 사용헤 덧셈할 문자열을 입력받아 리턴하는 메서드를 만들었다.
- 오류가 발생하면 오류 메시지를 출력하고 null을 리턴하였다.

### 커스텀 구분자 처리
```
  getCustom(str){
    const regex = /\/\/(.*?)\\n/;
    const customSeperator = str.match(regex);

    return customSeperator ? customSeperator[1] : null;
  }
```
- 정규표현식을 사용해 `//`와 `\n`사이에 있는 문자를 추출하였다.
- match 메서드로 추출한 값이 배열이고, 첫 번째 요소는 전체 매칭된 부분, 두 번째 요소는 내가 찾았던 부분이므로 index 1번 값을 리턴하게 하였다.
- `\n`이 줄바꿈을 의미하는 이스케이프 문자로 인식되어서 제대로 인식되지 않는 문제가 있었는데 \n앞에 \을 붙여 \\n으로 사용하니 \n을 그냥 문자로 사용할 수 있었다.

## ⭐️ 결과 ⭐️ 
