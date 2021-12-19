function solution(num1, numArr) {
    if (numArr.length > 100 && numArr.length < 0) return;
    let answer = [];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] >= num1) answer.push(numArr[i])
    }
    return answer;
}

const answer = solution(6, [7, 3, 9, 5, 6, 12])
console.log(answer)


function solution2(numArr) {
    if (numArr.length > 100 && numArr.length < 0) return;
    let answer = [];
    answer.push(numArr[0])
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] > numArr[i - 1]) answer.push(numArr[i])
    }
    return answer;
}
const answer2 = solution2([7, 3, 9, 5, 6, 12])
console.log(answer2)
