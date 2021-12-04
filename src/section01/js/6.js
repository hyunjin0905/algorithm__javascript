const num = [12, 77, 38, 41, 53, 92, 85]

function answer(data) {
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 !== 0) {
            sum += data[i];
            if (data[i] < min) min = data[i];
        }
    }
    return {min: min, sum: sum}
}

const data = answer(num)
console.log(data);