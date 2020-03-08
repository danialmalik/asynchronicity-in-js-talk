// Promise is either resolved or rejected but not both

const promise = new Promise(function (resolve, reject) {
    resolve(10);
    reject(Error('unknown error'))
})

promise.then(console.log).catch(console.error)

//Promise is executed only once. The result can be used multiple times

let input = 10;
const promise2 = new Promise(function(resolve, reject){
    resolve(input)
})

promise2.then(val => console.log(val)) // 10

input = 20;
promise2.then(val => console.log(val)) // still 10
