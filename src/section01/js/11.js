// 대문자 찾기
function solution(str) {
    let re = /[A-Z]/g
    return str.match(re).length
}

console.log("soultion1, ", solution("KoreaTimeGood"))

// 대문자 찾기
function solution2(str) {
    let count = 0;
    for (let x of str) {
        if (x === x.toUpperCase()) {
            count++;
        }
    }
    return count;
}

console.log("solution2, ", solution2("KoreaTimeGood"))

function solution3(str) {
    let count = 0;
    for (let x of str) {
        let num = x.charCodeAt()
        if (num >= 65 && num <= 90) count++
    }
    return count;
}

console.log("solution3, ", solution3("KoreaTimeGood"))

// 대문자 65 ~ 90 : 25개+1 = 26개
// 소문자 97 ~ 122 :
