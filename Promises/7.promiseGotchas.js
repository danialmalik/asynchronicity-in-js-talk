// // Promise is either resolved or rejected but not both

// const promise = new Promise(function (resolve, reject) {
//     resolve(10);
//     console.log('Will I run?');
//     reject(Error('unknown error'));
//     console.log('Yes I will');
// })

// promise.then(console.log).catch(console.error)

//Promise is executed only once. The result can be used multiple times

let input = 10;
const promise2 = new Promise(function(resolve, reject){
    resolve(input)
})

promise2.then(val => console.log(val)) // 10

input = 20;
promise2.then(val => console.log(val))
