const developer = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10), 2000)
})

const designer = function (input) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(input * 2), 2000);
    })
}

// Nested thens

developer.then(val => {
    designer(val).
        then(result => console.log('Final response: ', result))
})


// // outer thens

// developer
//     .then(val => designer(val))
//    // .then(val => Promise.resolve(designer(val)))
//     .then(result => console.log('Final response: ', result))
