# 241015 D+1

어떻게 구현할 것인가?

사용자의 값을 입력 및 출력

# 동작 흐름

1. `Console.readLineAsync()`로 사용자에게 문자열을 입력하도록 함

2. 문자열을 받음
   ```
   //example
   1,2:3
   ```
3. 받은 문자열을 `inputs` 값에 넣고
4. 구분자를 정규식으로 지정
   4-a. 커스텀 구분자가 있는 경우 확인
   4-b. "//"와 "\n" 사이의 문자가 구분자가 됨

5. 문자열을 구분자로 나눠서(`split()`) array에 담음
6. 해당 배열 안의 모든 합을 더함 - for문
7. 값을 `Console.print("결과 : ${값}")`으로 노출

```
Console.readLineAsync()
let regs = {
  normal : /[,:]/g,
  custom : /[/\n]/i,
}
const inputs = `1,2:3`;
const customReg = new RegExp(regs.custom);

if(customReg.test(inputs)){
  reg = normalReg
}

let answer = 0;
let arr = inputs.split(customReg); // 배열 생성

try {
  for(let i=0; i++; i <= arr.length){
    answer += arr[i];
  }

  Console.print(`결과 : `)
}catch (e){

}


```

`Console.readLineAsync()`

`Console.print()`

## 오류 수정

- String.prototype.includes must not be a regular expression
