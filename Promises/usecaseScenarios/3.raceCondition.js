const flash = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Flash...'), 2001)
})

const superman = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Superman...'), 2001);
})

const batman = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('I AM BATMAN!!!!!'), 2000);
    // setTimeout(() => reject('I AM BATMAN!!!!!'), 2000);
})

console.log('Before')

Promise.race([flash, superman, batman])
    .then((val) => {
        console.log('Race winner is... ', val);
    })

console.log('After')
