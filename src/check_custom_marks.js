export function check_custom_mark(user_input){
    const length_userInput = user_input.length;
    let index_oflastmark;

    if(user_input[0] === '/' && user_input[1] === '/'){
        for(let i = 2; i < length_userInput; i++){
            if(user_input[2] === '\n'){
                throw new Error("Error")
                
            }
            if(user_input[i] === '\n'){
                index_oflastmark = i;
            } 
        }
        return index_oflastmark; // 첫번째 두번쨰 문자가 //면 \n만 몇번째에 있는지 알면 그사이가 전부 커스텀 구분자인지 알수있음.
    }
    else{
        return false;
    }
}