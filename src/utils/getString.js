import { MissionUtils } from "@woowacourse/mission-utils";
import { hasStringNumber, hasSymbol } from '../errorHandling';

const getString = async() =>{
    try{
        const inputValue = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
        if(!hasSymbol(inputValue) || !hasStringNumber(inputValue)){
            throw new Error("[ERROR] 입력을 잘못하셨습니다. 어플리케이션이 종료됩니다. ");
        }
        return inputValue;
    }catch(error){
        throw new Error("[ERROR] 입력을 잘못하셨습니다. 어플리케이션이 종료됩니다. ");
    }

  
}

export default getString