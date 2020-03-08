const promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Fulfilled'), 2000)
    // setTimeout(()=>reject('Rejected'), 2000)
})

console.log('Making a promise');
promise.then(val => console.log(val))
console.log('I don\'t know when the promise will be fulfilled, so not waiting');
