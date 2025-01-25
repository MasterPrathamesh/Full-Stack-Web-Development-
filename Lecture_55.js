// Today we are going to learn about Event Loop : 
/*
firstly we are going to learn about , what is sync programming: 
In synchronous programming, operations are performed one after the other, in sequence.
So, basically each line of code waits for the previous one to finish before proceeding to the next. 
This means that the program executes in a predictable, linear order, with each task being completed before the 
next one starts

Then Async Programming : 
Asynchronous programming, on the other hand, allows multiple tasks to run independently of each other. 
In asynchronous code, a task can be initiated, and while waiting for it to complete, other tasks can proceed. 
This non-blocking nature helps improve performance and responsiveness, especially in web applications.

=======================================================================================================

Next , we're going to learn about event loop . 

There are three things which we have to remember in event loop : 
1.The first one is : Call Stack 
2.The second one is : Browser
3.The third one is : Callback Queue.

Now, consider we have 3 lines of code is written that is : 

console.log("start"); 
setTimeOut(sayMyName,5000); --> Assume sayMyName function is priting "console.log("Pratham")"; 
console.log("end"); 

Now , when the program runs : the cursor goes to line no.1 and that line goes to call stack. 
After going to call stack , the start gets printed to the screen and the 'console.log("start") is deleted from the 
call stack. 

Then the cursor goes to the second line which has async function: then it is sent to call stack, then it does not 
wait for 5000ms to complete , so it sends the setTimeOut method to browser, then the browser keeps the setTimeOut 
function within it and starts counting the time till 5000ms that is 5secs. And the setTimeOut method is removed
from the call stack. Meanwhile, execution dosen't stay idle after sending the setTimeOut function to the browser 
the corsor moves to the third line which is "console.log("end");" then the cursor sends it to the call stack 
till then browser's time is still counting as 5000ms are not completed , after coming to call stack the console.log 
prints the "End" to the output screen. 

Till then the 5000ms are completed , and the browser send's it to the Callback Queue : 
The Callback queue contains the function sayMyName() and when the call stack is empty the event loop will send the 
sayMyName function to the call stack and the call stack will execute it. 

There is an online tool on which you can see it's implementation and we can understand it : 
http://latentflip.com/loupe

*/