/* JAVASCRIPT ASYNC METHODS */

// setTimeOut() - activates the code after a period of time.

// console.log("Hey, I am just going to do stuff, while I wait 10 seconds for my UberEats delivery");

/* setTimeout(()=>{
    // console.log("My delivery just arrived!");
}, 10000) //1second = 1000ms */

//console.log("I am organizing my life with Notion");

//console.log("I am not the guy who hates the Beatles, so I'm listening to Let it Be.");


// setInterval() - activates the code within an interval of time.

function doCountdown(){
    let counter = 10;
    const countdown = setInterval(()=>{
        console.log(counter);
        if(counter === 0){
            console.log("Time's up!");
            clearInterval(countdown);
        }
        counter = counter - 1; // same as: counter --
    }, 1000)
}


// I wait 2 seconds, then I start my countdown.

function waitTwoSeconds(countdownFunc){
    setTimeout(()=>{
        countdownFunc();
    }, 2000)
}

waitTwoSeconds(doCountdown);

