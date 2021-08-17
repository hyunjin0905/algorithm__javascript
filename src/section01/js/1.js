// 셋 중에 최솟값
function minNumber(num1, num2, num3) {

    let data, data2;
    if (num1 > num2) data = num2;
    else data = num1;

    if (data > num3) data2 = num3;
    else data2 = data;

    return data2;
}