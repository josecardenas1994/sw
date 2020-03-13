var mathLib = require('./myMath');

function homework(){
    // print first 20 even numbers
    for(i=0;i<41;i++){
        if(i%2===0){
        console.log("is even: "+i);

        
        } else if(i%2!=0)
        console.log("is odd: "+i);

    }
    
}

function init() {
    /*console.log("Hello world!");

    let age = 99;
    console.log(age);
    
    let name = "Jose";
    console.log("My name is: " + name);

    mathLib.sayHello("this is a p val"); // exec the fn on the module
    var res = mathLib.sum(21,21);
    console.log(res);
    var g = mathLib.greater(897123, 89123);
    console.log(g);

    console.log(mathLib.greater((182*2762) ,-2));

    console.log("is even: " + mathLib.isEven(42));
    console.log("is even: " + mathLib.isEven(333));
    console.log("is even: " + mathLib.isEven(0));*/

    homework();
}

init();