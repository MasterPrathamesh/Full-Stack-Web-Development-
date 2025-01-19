// what is Error Handling :  
// what is an error : Error is an event which disrupts the normal flow of execution of an program . 
// Their are two types of errors : 1. Compile time error and the second one is Runtime error . 
/* The compile time error means that the error which occurs before the execution of code. 
The Runtime error means that the error which occurs during the execution of the program.
*/
// The Syntax error
// console.log(1;

// Runtime error 
// console.log(x);

 

// Try - catch block : 
// try{
//     console.log("Try block starts here");
//     console.log(x);
//     console.log("Try block ends here");
// }
// catch(e){
//     // define karte hai , error ke sath aap kya karna chahte hai 
//     // retry logic 
//     // logging
//     // fallback mechanism. 
//     console.log("I am indside catch block.");
//     console.log("The error is : ",e);
//     console.log("Catch block ends here");
// }
// finally{
//     console.log("I will run everytime as i am finally block !");
// }

//finally Block : This will run everytime
// Now let's see about the throw block : 
try{
    console.log(x);
}
catch{
    console.log("Inside the catch block"); 
    throw new Error("Pehle variable declare kar do, fir pirnt karna !!");
}








































