
const p = new Promise(function (resolve, reject) {
    // success
    setTimeout(()=>resolve('Fulfilled'), 1000);
    // failure
    // reject('Rejected :(')
})

async function main(){
    const result = await p;
    console.log(result);
}

main();
