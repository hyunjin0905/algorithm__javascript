function solution(str) {
    let answer;
    answer = str.filter(function (v, i) {
        return str.indexOf(v) === i
    })
    return answer;
}

console.log(solution())