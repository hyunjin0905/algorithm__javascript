// 가장 긴 문자열
function solution(obj) {
    let maxStr = "";
    for (let i = 0; i < obj.num; i++) {
        if (obj.strList[i].length > maxStr.length) {
            maxStr = obj.strList[i]
        }
    }
    return maxStr;
}

console.log(solution({
    num: 5,
    strList: ["teacher", "time","student", "beautiful", "good"]
}))