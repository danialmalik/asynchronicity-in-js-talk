const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10), 1000)
    // setTimeout(() => reject(10), 1000)
})

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(20), 2000);
})

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(30), 2000);
})

console.log('Before')

Promise.all([promise1, promise2, promise3])
    .then(([val1, val2, val3]) => {
        console.log('Value from promise1, ', val1);
        console.log('Value from promise2, ', val2);
        console.log('Value from promise3, ', val3);
    })
    .catch(err=>console.error(err))

console.log('After')
