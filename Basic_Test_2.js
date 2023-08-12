const plusMinus = (arr) => {

    let posValue = 0
    let negValue = 0
    let zero = 0
    let n = 6

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > 0) posValue++
        if (element < 0) negValue++
        if (element == 0) zero++
    }

    let newPosValue = (posValue / arr.length).toFixed(n)
    let newNegValue = (negValue / arr.length).toFixed(n)
    let newZero = (zero / arr.length).toFixed(n)

    return [newPosValue, newNegValue, newZero]
}

let arr = [-4, 3, -9, 0, 4, 1]
console.log(plusMinus(arr))


/*
CARA KEDUA
const plusMinus = (arr) => {
    const n = arr.length;
    const counts = [0, 0, 0]; // [positive, negative, zero]

    for (const element of arr) {
        if (element > 0) counts[0]++;
        else if (element < 0) counts[1]++;
        else counts[2]++;
    }

    const ratios = counts.map(count => (count / n).toFixed(6));
    return ratios;
};

const arr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(arr));

*/