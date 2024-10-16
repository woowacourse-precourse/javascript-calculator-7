import { MissionUtils } from "@woowacourse/mission-utils";

const getString = async() =>{
    try{
        const inputValue = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
        return inputValue;
    }catch(error){
        MissionUtils.Console.Print("[Error] 입력을 잘못하셨습니다. 어플리케이션이 종료됩니다. ");
    }
    
  
}

export default getString