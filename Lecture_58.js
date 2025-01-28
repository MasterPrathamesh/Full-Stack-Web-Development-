// Today, we are going Learn about Closures. 
/*
    So , what is Closure ?
--> Closure, is a top level entity, and to make closure we require two things : 
first , our function.
second , and that function's required data . The required data is also called as Lexical scope or surrounding state.

closure = {function + req.data}


*/

// function init(){
//     let name = "Pratham"; //let --> block scoped.  name is a local variable created by init
//     function displayName() {
//         // displayName is the inner function,that forms a closure.
//         console.log(name); // use variable declared in the parent function.
//     }
//     displayName();
// }

// init();



function outerFunction(){
    let name = "Pratham";

    function innerFunction(){
        console.log(name);
    }

    return innerFunction;
}

let inner = outerFunction();

inner();




























































