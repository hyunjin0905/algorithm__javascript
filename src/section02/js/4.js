function solution(a) {
    let answer = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[0] === 1) answer += 1
        else if (a[i - 1] === 1 ) answer += 1
        else answer += 0
    }
    return answer;
}

console.log(solution([1,0,1,1,1,0,0,1,1,0]));
