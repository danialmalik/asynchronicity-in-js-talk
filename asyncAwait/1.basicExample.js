// const p = new Promise(function (resolve, reject) {
//     // success
//     console.log('inside')
//     resolve('Fulfilled :)');
//     // failure
//     // reject('Rejected :(')
// })

// async function main(){
//     console.log('1')
//     console.log('1')
//     console.log('1')
//     const result = await p;
//     console.log('1')
//     console.log(result);
//     console.log('1')
// }

// main();


const p = new Promise(function (resolve, reject) {
    // success
    resolve('Fulfilled :)');
    // failure
    // reject('Rejected :(')
})

async function main(){
    const result = await p;
    console.log(result);
}

main();
