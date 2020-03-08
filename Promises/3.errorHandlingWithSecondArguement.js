const promise = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve('Fulfilled'), 2000)
    setTimeout(() => reject('Rejected'), 2000)
})

console.log('First');
promise.then(
    val => console.log('Success: ', val),
    error => console.error('Error: ', error)
)
console.log('Second');
