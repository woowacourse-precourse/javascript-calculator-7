export function Sum_string_num(Str_num_array){

    let sum = 0;

    for(let value of Str_num_array){
        sum += parseInt(value);
    }

    return sum;
}