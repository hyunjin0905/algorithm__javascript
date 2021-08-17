// 삼각형 판별하기
/*
삼각형의 결정조건
세 변의 길이를 알 때 (가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야)
두 변의 길이와 그 사이 끼인각의 크기를 알 때
한 변의 길이와 양쪽 끝각의 크기를 알 때

 */

function solution (a, b, c) {
    let answer= "YES", max;
    let sum = a + b + c;
    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;
    if ((sum - max) <= max) answer = "NO"

    return answer;
}
