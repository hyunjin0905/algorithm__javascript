// 셋 중에 최솟값
function minNumber(num1, num2, num3) {

    let data, data2;
    if (num1 > num2) data = num2;
    else data = num1;

    if (data > num3) data2 = num3;
    else data2 = data;

    return data2;
}

const solution2 = (numList) => {
    let answer;
    // let min = Number.MIN_SAFE_INTEGER;
    let min = numList[0];
    for (let i = 0; i < numList.length; i++) {
        if (numList[i] < min) min = numList[i];
    }
    answer = min;
    return answer;
}
const data = [5, 3, 7, 11, 2, 15, 17];
const test7 = searchMinValue(data);
console.log(test7);

const test8 = solution2(data);
console.log(test8);

const solution3 = (arr) => {
    let answer = Math.min(...arr);
    console.log(Math.max(...arr));
    // arr[0], arr[1] , arr[2]  ...arr[6] 까지 펼쳐준다
    // 전개 연산자 안쓰고
    console.log(Math.max.apply(null, arr));
    return answer;
}


const test9 = solution3(data);
console.log(test9);
