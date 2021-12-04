// 10부제
let carNumber = [25, 23, 11, 47, 53, 17, 33]

function answer(day, number) {
    let answer = 0;
    for (let x of number) {
        if (x % 10 === day) {
            answer++;
        }
    }
    return answer;
}

console.log(answer(3, carNumber))