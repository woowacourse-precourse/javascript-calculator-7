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

    extractCustomSeparator(st){
        let separator = ""

        if(st.startsWith('//')){
            const idx = st.indexOf("\\n");
            if(idx > 2){
                separator = st.slice(2, idx-1);
            }
        }
        return separator;
    }
}