const promise = new Promise(function (resolve, reject) {
    resolve(10);
    // reject(Error('unknown error'))
})

promise.then(val => val * 2)
    .then(val => val / 2)
    .then(val => val * 2)
    .then(val => val / 2)
    .then(val => console.log('first, ', val))
    .then(val => { throw new Error('errrrrr') })
    .then(val => console.log('not called'))
    .then(val => console.log('not called'))
    .catch(err => console.error('Caught error: ', err.message))
    .then(() => { console.log('Called. starting again'); return 10; })
    .then(val => console.log('Value: ', val))
