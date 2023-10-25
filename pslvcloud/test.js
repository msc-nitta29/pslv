function Max(Arr){
    let max_numb = 0
    Arr.forEach(element => {
        if(element>max_numb)
        max_numb=element
    });
    return max_numb
}
function solution(A) {
    // Implement your solution here
    let max_number = Max(A)
    for(let i = 1 ;i <= max_number+1; i++){
        if(A.indexOf(i)==-1){
            console.log("OUTPUT===>",i);
            return i
        }
    }
}
solution([-1,-2,-3])