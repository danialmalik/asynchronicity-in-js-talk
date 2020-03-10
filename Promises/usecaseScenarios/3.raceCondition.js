const flash = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10), 2001)
})

const superman = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(20), 2001);
})

const batman = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(30), 2000);
})

console.log('Before')

Promise.race([flash, superman, batman])
    .then((val) => {
        console.log('Race winner is... ', val);
    })

console.log('After')
