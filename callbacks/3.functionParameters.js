/**
function main() {
    doSomeWork(data,
        function successCallback(results) { console.log(results) },
        function errorCallback(error) { console.error(error) })
}

function doSomeWork(data, successCallback, failureCallback) {
    // do some work
    // for error
    failureCallback(new Error(''))
    // for success
    successCallback({})
}
*/
function manager() {
    const value = 1000;
    console.log('assigning task to employee');
    function handleSuccess(result) {
        console.log('Got results from employee: ', result)
    }
    function handleFailure(error) {
        console.log('Useless employee failed the task! Excuse: ', error.message);
    }
    employeeTask(value, handleSuccess, handleFailure)

    console.log('Assigned a task to employee. I\'ll do whatever I want now');
    for (let i = 0; i < 1000000000; i++) { }
    console.log("I got free. Let's see what the employee has done");
}

function employeeTask(value, successCallback, failureCallback) {
    if (typeof (value) !== 'number') {
        return setTimeout(() => failureCallback(new Error('Datatype other than number is passed')), 2000);
    }
    const result = value * 2;
    setTimeout(() => successCallback(result), 2000)
}

manager()
