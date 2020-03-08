function makeAHell(){
    setTimeout(function(){
        setTimeout(function(){
            setTimeout(function(){
                setTimeout(function(){
                    setTimeout(function(){
                        setTimeout(function(){
                            console.log('Made a hell')
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }, 1000)
}
console.log('Making a hell');
makeAHell();
console.log('I’ll run before a hell is made');
