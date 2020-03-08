const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10), 2000)
})

const promise2 = function (input) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(input * 2), 2000);
    })
}

async function main(){
    const val1 = await promise1;
    const val2 = await promise2(val1);
    console.log(val2);
}

main();
