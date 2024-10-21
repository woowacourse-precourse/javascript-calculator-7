export function add(numbers){
    return numbers.reduce((sum,num) => sum + Number(num), 0);
}
