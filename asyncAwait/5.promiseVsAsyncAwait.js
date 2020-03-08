// Promise
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

// Async await

const promisedAsyncCompute2 = function (value) {
    return new Promise(function (resolve, reject) {
        if (typeof (value) !== 'number') {
            reject(Error('Number required'));
        }
        else setTimeout(() => resolve(value * 10), 2000)
    })
}

async function main(){
    try{
        const results = await promisedAsyncCompute2(20);
        console.log('Booyah ,',results);
    } catch (ex){
        console.error('Damn ,',results);
    }
}

main();
