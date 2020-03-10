
// const p = new Promise(function (resolve, reject) {
//     // success
//     setTimeout(()=>resolve('Fulfilled'), 1000);
//     // failure
//     // reject('Rejected :(')
// })

// async function main(){
//     const result = await p;
//     console.log(result);
// }

// console.log('Before')
// main();
// console.log('After')

// Move this below ?


var p = new Promise(function (resolve, reject) {
    // success
    console.log('Inside 1: before')
    setTimeout(()=>resolve('Fulfilled 1'), 2000);
    console.log('Inside 1: After')
    // failure
    // reject('Rejected :(')
})

var p2 = new Promise(function (resolve, reject) {
    // success
    console.log('Inside 2: Before')
    setTimeout(()=>resolve('Fulfilled 2'), 2000);
    console.log('Inside 2: After')
    // failure
    // reject('Rejected :(')
})

async function main(){
    console.log('Main before P1')
    const result = await p;
    console.log(result);
    console.log('Main After P1')

    console.log('Main before P2')
    const result2 = await p2;
    console.log(result2);
    console.log('Main After P2')



}

console.log('Before')
main();
console.log('After')
