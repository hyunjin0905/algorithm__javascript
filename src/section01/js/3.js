// 연필개수 
const pencilDas = (persons) => {
    if (persons === 0) return;
    const oneDas = 12;
    let dasCount = 0;
    dasCount = Math.ceil(persons / oneDas);

    return dasCount;
}

const test1 = pencilDas(13);
console.log(test1);

const test2 = pencilDas(25);
console.log(test2);

const test3 = pencilDas(178);
console.log(test3);

