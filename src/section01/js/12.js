// 대문자로 통일
function answer(str) {
    let data = [];
    for (let i of str) {
        if (i === i.toLowerCase()) {
            data.push(i.toUpperCase())
        } else {
            data.push(i);
        }
    }
    return data.join('')

}

console.log("answer1", answer("ItisTimeToStudy"))


function solution(str) {
    let answer = "";
    for (let x of str) {
        let num = x.charCodeAt()
        if (num <= 122 && num >= 97 ) {
            answer += String.fromCharCode(num - 32)
        } else {
            answer += x
        }
    }
    return answer
}

console.log(solution("ItisTimeToStudyadkfks"))