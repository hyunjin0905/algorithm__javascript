function solution(str) {
    let answer = "";
   let pos = str.indexOf("k")
    while(pos !== -1) {
       answer++;
       pos = str.indexOf("k", pos + 1)
    }
    return answer;
}


console.log(solution("ksekkset"))