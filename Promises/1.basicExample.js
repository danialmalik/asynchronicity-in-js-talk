const p = new Promise(function (resolve, reject) {
    // success
    resolve('Fulfilled :)');
    // failure
    // reject('Rejected :(')
})

p.then(val => console.log(val))
    .catch(err => console.error('Error: ', err))
