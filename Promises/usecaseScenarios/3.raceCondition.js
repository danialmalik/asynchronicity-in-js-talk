const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10), 2001)
})

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(20), 2000);
})

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(30), 2000);
})

console.log('Before')

Promise.race([promise1, promise2, promise3])
    .then((val) => {
        console.log('Value from promise, ', val);
    })

console.log('After')
