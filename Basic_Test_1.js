const MiniMaxSum = (arr) => {
    let MiniSum = 0
    let MaxSum = 0

    const newArr = arr.sort()
    for (let i = 0; i < newArr.length - 1 ; i++) {
        const element = newArr[i];
        MiniSum += element
    }
    for (let i = 1; i < newArr.length; i++) {
        const element = newArr[i];
        MaxSum += element
    }

    return [MiniSum , MaxSum]

}


let arr = [1, 2, 4, 3, 5]
console.log(MiniMaxSum(arr))

/*
CARA KEDUA

const MiniMaxSum = (arr) => {
    const sortedArr = arr.slice().sort(); // Create a sorted copy of the array
    const MiniSum = sortedArr.slice(0, -1).reduce((acc, val) => acc + val, 0);
    const MaxSum = sortedArr.slice(1).reduce((acc, val) => acc + val, 0);

    return [MiniSum, MaxSum];
};

const arr = [1, 2, 4, 3, 5];
console.log(MiniMaxSum(arr));

*/
