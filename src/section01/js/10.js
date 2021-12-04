// 문자찾기
function answer(aStr, bStr) {
    let count = 0;
    for (let i = 0; i < aStr.length; i++){
        if (bStr === aStr[i]) {
            count++;
        }
    }
    return count
}

console.log(answer("COMPUTERPROGRAMMING", "R"))

function solution(aStr, bStr) {
    let count = 0;
    for(let i of aStr){
        if(i === bStr) {
            count++;
        }
    }
    return count;
}
console.log(solution("COMPUTERPROGRAMMING", "P"))


function solution(aStr, bStr) {
    let str = aStr.split(bStr).length - 1;
    return str;
}
console.log(solution("COMPUTERPROGRAMMING", "R"))

