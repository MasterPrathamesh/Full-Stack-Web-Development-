/*
Today, we are going to learn about Promise : 
Promise is basically a object which handles the async function's output in an systematic way. 
--> There are different states for promises : 
The first one is : 
--> Resolve/Fulfilled
--> Rejected 

Their is an syntax for using promise : 
syntax : 
    new Promise ((resolve,reject) =>{ 
        =======
        ======
        ======
        ====
        ==
        =
    }); 



*/

// Let's create our first promise : 
// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Hi Pratham , How are you doing today ?"); 
// });

// Now , when you'll inspect the file after running it , in console it will print the output.
//But if you'll print the firstPromise variable then , it will show the status as "Pending". 
// Now to make it fulfilled , we've to add the resolve function to the above code. 

// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Hi Pratham , How are you doing today ?"); 
//     resolve("This is resolve method");
// });

// The output of the above code wil be as following : 

/*
Hi Pratham , How are you doing today ?
firstPromise
Promise {<fulfilled>:'This is resolve method'}
    [[Prototype]]: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "This is resolve method"

*/

// Now if we want to reject the promise : 

// let secondPromise = new Promise((resolve, reject) => {
//     console.log("Adding the reject status.."); 
//     reject(new Error("Internal Server Error")); 
// });

// Now these are the basic examples that shows what we can do with the Promises : 
// Now let's create a async function : 

let thirdPromise = new Promise((resolve, reject) => {
    setTimeout(function sayMyName() {
        console.log("Hello , Pratham ! How are you doing today.."); 
    },15000);
    resolve(1); 
}); 

// Now in Promise if we've got the status as fulfilled then we can use then() to do further operations.
// if we use failure/reject then we can use catch().

// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise Fulfilled"); 
//     }
//     else{
//         reject("Promise Rejected");
//     }
// });

// promise1.then((message) =>{
//     console.log("Then ka message is : " + message);
// }).catch((error) => {
//     console.log("Error : " + error);
// });

// This will show the output as : 
//Then ka message is : Promise Fulfilled

// we can also use multiple then() blocks.
// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise Fulfilled"); 
//     }
//     else{
//         reject("Promise Rejected");
//     }
// });

// promise1.then((message) =>{
//     console.log("Then ka message is : " + message);
//     return "Promise fulfilled second message";
// }).then((message)=>{
//     console.log("second msg : " + message);
//     return "Promise fulfilled third message";
// }).then((message)=>{
//     console.log("Third msg "+ message);
// });

// we can use multiple then blocks and this use of multiple then blocks are known as Promise Chaining.

// Now we can handle the errors with the help of catch blocks. if we do success = false then : 
// let promise1 = new Promise((resolve, reject) => {
//     let success = false;
//     if(success){
//         resolve("Promise Fulfilled"); 
//     }
//     else{
//         reject("Internal Server Error");
//     }
// });

// promise1.then((message) =>{
//     console.log("Then ka message is : " + message);
//     return "Promise fulfilled second message";
// }).then((message)=>{
//     console.log("second msg : " + message);
//     return "Promise fulfilled third message";
// }).then((message)=>{
//     console.log("Third msg "+ message);
// }).catch((error) =>{
//     console.log(error);
// }).finally((message)=>{
//     console.log("Main toh finally hu, me toh pakka chalunga");
// });


// Now if we have to handle multiple Promises then we use ==> Promise.all
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"First");
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000,"Second");
})
let promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve,3000,"Third");
})

// This Promise.all will create a new promise which will run all the promises which are given in the array.
// If any one Promise fails in the array , this new Promise will get marked as rejected. 
Promise.all([promise2,promise3,promise4])
.then((values)=>{
    console.log(values);
});











































