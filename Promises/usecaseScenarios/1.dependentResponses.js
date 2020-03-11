const developer = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10), 2000)
})

const designer = function (input) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(input * 2), 2000);
    })
}


// nested thens
developer
    .then(val => {
        designer(val)
            .then(result => console.log('Final response: ', result));
    })




// chained thens

developer
    .then(val => designer(val))
    // .then(val => Promise.resolve(designer(val)))
    .then(result => console.log('Final response: ', result))
