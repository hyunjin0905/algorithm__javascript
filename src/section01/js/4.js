// 1부터 N 까지 구하기

const plusData = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

const test5 = plusData(6);
console.log(test5);

const test6 = plusData(10);
console.log(test6);

