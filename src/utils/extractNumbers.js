// 구분자를 통해 숫자 추출하는 함수
export function extractNumbers(input, delimiters){
    // 6. 빈 문자열이 들어올 경우 ⇒ 0 출력
    const numberArray = [0];

    // 커스텀 구분자가 들어가면 그 이후부터 탐색, 없으면 처음부터 탐색 
    const startIndex = input.lastIndexOf("\\n") === -1 ? 0 : input.lastIndexOf("\\n") + 2;

    let sliceInput = input.slice(startIndex);

    // 첫번째 방법 : 정규식을 통한 구분자 사이의 숫자 추출
    // 정규식에 사용되는 특수 문자(']')가 들어가면 로직이 예상대로 작동하지 않아 반복문 방식 선택
    // const regex = new RegExp(`[${delimiters.join('')}]`);
    // const extractNumbers = sliceInput.split(regex);


    // 두번째 방법 : 반복문을 통한 구분자 사이의 숫자 추출
    for (let delimiter of delimiters) {
        const parts = sliceInput.split(delimiter);
        
        // 구분자를 기준으로 나눠진 파트들을 다시 합쳐서 구분자를 하나씩 제거
        sliceInput = parts.join(' ');
    }

    // // 위의 반복문을 통해 나온 구분자가 공백으로 바뀐 문자열을 공백을 기준으로 다시 split 해준뒤 배열로 생성
    const extractNumbers = sliceInput.split(' ');


    // 8. 맨 뒤에 문자가 들어갈 경우 ⇒ 에러로 출력
    // 9. 구분자가 여러개 연달아 들어갈 경우 ⇒ 에러로 출력
    // 즉 숫자가 맞는지 확인하는 절차 -> 맞으면 numberArray에 넣고 틀리면 ERROR 반환
    for (let extractNumber of extractNumbers) {
        if(extractNumber && !isNaN(Number(extractNumber))){
            numberArray.push(Number(extractNumber));
        }
        else{
            throw new Error("[ERROR]");
        }
    }

    return numberArray;

}