function solution(str) {
    if (str.length % 2 === 0) {
        return str[(str.length / 2) - 1] + str[str.length / 2]
    } else {
        return str [Math.ceil(str.length / 2) - 1]
    }
}

console.log(solution("study"))
console.log(solution("good"))
console.log(solution("teacher"))

// function solution2(s) {
//     let answer;
//     let mid = Math.floor(s.length/2)
//     if(s.length % 2 == 1) {
//         answer = s.substring(mid, mid+)
//     }
//     return answer;
// }
// console.log(solution2("study"))