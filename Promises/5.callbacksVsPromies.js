// Callbacks
function asyncCompute(value, callback) {
    setTimeout(function () {
        if (typeof (value) !== 'number') {
            callback(Error('Number required'))
        }
        else callback(null, value * 10)
    }, 2000);
}
asyncCompute(100, function (err, result) {
    if (err) console.error('Damn ,', error);
    else console.log('Booyah ,', result);
});

// Promises
const promisedAsyncCompute = function (value) {
    return new Promise(function (resolve, reject) {
        if (typeof (value) !== 'number') {
            reject(Error('Number required'));
        }
        else setTimeout(() => resolve(value * 10), 2000)
    })
}
promisedAsyncCompute(100)
    .then(val => console.log('Booyah ,', val))
    .catch(err => console.error('Damn ,', err))
