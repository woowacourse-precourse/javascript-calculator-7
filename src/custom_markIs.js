export function custom_mark (user_input, index_oflastmark){
    let customMark = '';

    for(let i = 2; i < index_oflastmark; i++){
        customMark += user_input[i]; 
    }

    return customMark;
}