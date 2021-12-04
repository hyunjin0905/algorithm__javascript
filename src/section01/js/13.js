// 대소문자 변환
function solution(str) {
    let changeStr = "";
    for (let i of str) {
        let num = i.charCodeAt()
        if (num <= 122 && num >= 97) {
            changeStr += i.toUpperCase()
        } else {
            changeStr += i.toLowerCase()
        }
    }
    return changeStr;
}
console.log(solution("StuDY"))