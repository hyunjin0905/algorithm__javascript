// 최솟값 구하기

const arr = [1, 2, 3, 4, 8, -1];

function answer(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]
    }
    return min;
}

const min = answer(arr);
console.log("최솟값",min)

