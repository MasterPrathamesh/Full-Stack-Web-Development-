// Today we are going to learn about , Performance Improvement.
/*
In this , we are going to learn about how we are going to write our code so that we can measure it's performance. 
And what are the efficient and good practices to write the code so that it will give the good performance. 

*/

// code 1 : 
// for(let i= 1 ; i<=100;i++){
//     let para = document.createElement('p'); 
//     para.textContent = "This is Para " + i ; 
//     document.body.appendChild(para); 
// }
// Now , we have to measure the performance of the code we've written , 
// so their is an standard way so that we can find that how our code is performimg and the method for this is : 
// --------> performance.now() method : in output it gives you timestamp. 
// the difference between t1 and t2 is the amount of time the code has taken to run any function or loop. 
// -----> for ex: 

const t1 = performance.now()

for(let i= 1 ; i<=100;i++){
    let para = document.createElement('p'); 
    para.textContent = "This is Para " + i ; 
    document.body.appendChild(para); 
}

const t2 = performance.now()

console.log("total time by code 1 : " + (t2-t1)); 


// code 2 : 
const t3 = performance.now()

let mydiv = document.createElement('div'); 

for(let i = 1; i<=100;i++){
    let para = document.createElement('p'); 
    para.textContent = "This is Para" + i ; 
    mydiv.appendChild(para); 
}
document.body.appendChild(mydiv);

const t4 = performance.now()

console.log("total time by code 2 : " + (t4-t3)); 


// To see the performance of both the codes , run the html file and inspect it , go to console and you'll be able to see
// the results in the console. 

//=====================================================================================

// Next , we are going to learn about Reflow && Repaint.

// Reflow : it is the process of calculating the position/dimension of an element which we have to render on the webpage. 
// Reflow is Computationally intensive task. 

// Repaint : it is the process of displaying content/element pixel by pixel on the webpage. 
// Repaint is computationally faster than Reflow. 


//=============================================================

// Now , let's talk about : Document Fragment. 
// ----> it is a light weight document object , and it is basically a copy of document object but computationally 
// it requires less resources. 

// Then what is it's main use : 
// ---> while we add or render any element on the webpage it does not use reflow or repaint. so it will be more faster.


// As we already know that if we officially render or add or append in the document like : 
// document.body.append --> so it takes 1 reflow , and 1 repaint. 


// best code : 

let fragment = document.createDocumentFragment();

for(let i = 1; i<=100 ; i++){
    let para = document.createElement('p'); 
    para.textContent = "This is para " + i ; 
    // now reflow and no repaint for the below line 
    fragment.appendChild(para); 
}

// the below line takes 1 reflow and 1 repaint.
document.body.appendChild(fragment); 





























