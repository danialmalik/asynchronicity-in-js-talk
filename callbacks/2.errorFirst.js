/**
function main(){
    doSomeWork(data, function callback(error, results){
        if(error){
            console.error(error)
        } else {
            console.log(results)
        }
    })
}

function doSomeWork(data, callback){
    // do some work
    // for error
    callback(new Error(''))
    // for success
    callback(null, {})
}
 */

function manager() {
    const value = '0000q';
    console.log('assigning task to employee');
    employee_task(value, function (error, result) {
        if (error) {
            console.log('Useless employee failed the task! Excuse: ', error.message);
        } else {
            console.log('Got results from employee: ', result)
        }
    })

    console.log('Assigned a task to employee. I\'ll do whatever I want now');
    for(let i = 0; i<1000000000; i++){}
    console.log("I got free. Let's see what the employee has done");
}

function employee_task(value, callback) {
        if (typeof(value) !== 'number'){
            return setTimeout(()=>callback(new Error('Datatype other than number is passed')),2000);
        }
        const result = value * 2;
        setTimeout(() => callback(null, result), 2000)
}

manager()
