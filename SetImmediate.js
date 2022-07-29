function myFunction(platform){
    console.log("Hi, Welcome to " + platform);
    }
    console.log("Before the setImmediate call");
    let timerID = setImmediate(myFunction, "BEC");
    console.log("After the setImmediate call");
    for(let i=0; i<5; i++){
    console.log("Iteration: "+i);
    }