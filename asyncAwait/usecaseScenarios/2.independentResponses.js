const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10), 2000)
})

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(20), 2000);
})

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(30), 2000);
})

async function main() {
    // first (bad) way

    // const val1 = promise1;
    // const val2 = promise2;
    // const val3 = promise3;
    // const result1 = await val1;
    // const result2 = await val2;
    // const result3 = await val3;
    // console.log(result1, result2, result3)

    // second (good) way
    const [result1, result2, result3] = await Promise.all([promise1, promise2, promise3])
    console.log(result1, result2, result3);
}
main();
