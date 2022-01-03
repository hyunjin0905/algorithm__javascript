function solution(num1, numArr) {
    if (numArr.length > 100 && numArr.length < 0) return;
    let answer = 1 ; max = numArr[0];
        for(let i = 1; i < numArr.length; i++) {
            if (numArr[i] > max) {
                answer++;
                max = numArr[i]
            }
        }
    return answer;
}

const answer = solution(8, [130, 135, 148, 140, 145, 150, 150, 153])
console.log(answer)