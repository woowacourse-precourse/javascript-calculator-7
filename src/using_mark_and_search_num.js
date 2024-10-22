export function search_num(user_input, customMark_lastIndex = 0, custom_mark = 0){
    
    let j = 0;
    let generalMk = ':,';
    let num_Oneline = '';
    let search_num_array = [];

    
    if(user_input[0] === '/' && user_input[1] === '/'){

        for(let i = customMark_lastIndex + 1; i < user_input.length; i++){

            if(user_input[i] === custom_mark[0]){
                let count_custom_mark = 0;
                for(j = i ; j < i + custom_mark.length ; j++){
                    if(user_input[j] !== custom_mark[count_custom_mark]){
                        throw new Error("중간에 구분자를 잘못 입력하셨습니다.");    
                    }
                    else{
                        count_custom_mark += 1; 
                    }
    
                }
                i = j; 
                search_num_array.push((num_Oneline).toString());
                num_Oneline = '';
            }
            if(user_input[i] !== custom_mark[0]){
                if(isNaN(user_input[i]))
                    throw new Error("중간에 구분자를 잘못 입력하셨습니다.");
            }
    
            num_Oneline += user_input[i];
            if(i == user_input.length-1 )
                search_num_array.push((num_Oneline).toString());
    
    
        }
    }

    else{

        for(let i = 0 ; i < user_input.length; i++){
            
            if(user_input[i] === generalMk[0] || user_input[i] === generalMk[1]){
                    search_num_array.push((num_Oneline).toString());
                    num_Oneline = '';
                    
            }else{
                    if(isNaN(user_input[i]) !== true )
                        num_Oneline += user_input[i];
            }        

            
            if(i == (user_input.length - 1))
                search_num_array.push((num_Oneline).toString());
            
        }
    }
    
    console.log(search_num_array);
    return search_num_array;
}