const sum = {
    sumNumbers ({ arrayNumbers }) {
        //더하기 전에 숫자가 음수인지 확인하는 부분 추가돼야할 것
        let result = 0;

        for(let i = 0; i < arrayNumbers.length; i++){
            result += Number(arrayNumbers)
        }
        
        return result
    }
}