function printMeLater(message, time){
    setTimeout(()=>{
        console.log('Delayed printing message: ', message);
    }, time)
}


console.log('First');
printMeLater('See ya later!', 1000);
console.log("I won't wait for the callback so will run second");
