// Today, we are going to learn about "async-await". 
/*
Async and Await in JavaScript is used to simplify handling asynchronous operations using promises. 
By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier 
to manage complex asynchronous flows.

The async function allows us to write promise-based code as if it were synchronous. 
This ensures that the execution thread is not blocked. Async functions always return a promise. 
If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.


The await keyword is used to wait for a promise to resolve. It can only be used within an async block. 
Await makes the code wait until the promise returns a result, allowing for cleaner and more manageable asynchronous code.

*/

// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside set time out block ")
//     },3000);
// }

// let output = getData();

// async function getData(){
//     // get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
//     // parse json - async 
//     let data = await response.json();
//     console.log(data);
// }

// getData();


// async function getData(){
//     // get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     // parse json - async 
//     let data = await response.json();
//     console.log(data);
// }

// getData();


const myHeaders = new Headers();
myHeaders.append("Content-type","application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method : "POST",
    body : JSON.stringify({username : "Prathamesh Deshmukh"}),
    headers : myHeaders,
};

async function getData(){
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await fetch(url);
    let data = await response.json();
    console.log("Get Data Response",data);
}


async function postData(){
    const response = await fetch (url,options);
    let data = await response.json();
    console.log("My Data ",data);
}


async function processData(){
  await  getData();
  await postData();
}


processData();

















