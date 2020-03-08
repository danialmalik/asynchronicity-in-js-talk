const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10), 2000)
})

const promise2 = function (input) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(input * 2), 2000);
    })
}


promise1.then(val => {
    promise2(val).
        then(result => console.log('Final response: ', result))
})
// promise1.then(val => {
//     return promise2(val)
// })
//     .then(result => console.log('Final response: ', result))
