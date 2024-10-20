export default class Controller {
    baseSeparatorSplit(st, lst){
        let currentNumber = "";
        for (let ch of st){
            if(ch === ":" || ch === ','){
                if(currentNumber !== ""){
                    lst.push(parseInt(currentNumber, 10));
                    currentNumber = "";
                }
            }else{
                currentNumber += ch;
            }
        }
        if (currentNumber !== ""){
            lst.push(parseInt(currentNumber, 10));
        }
        return lst;
    }
}