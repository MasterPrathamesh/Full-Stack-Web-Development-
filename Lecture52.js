let paraElement = document.getElementById('spara');
console.log(paraElement);

// to print the style elements we can use it like this : 
console.log(paraElement.style);

// to make any changes in the css we can use it like this : 
paraElement.style.backgroundcolor = 'blue';

// we have .cssText to get & set the css properties and we can also do this to multiple inline styles.
let secondElement = document.getElementById('sdiv');
console.log(secondElement);

// From this you'll get to fetch the properties of the element.
console.log(secondElement.style.cssText);

// To set the multiple properties for the elements. 
secondElement.style.cssText = "background-color:black; color : white; padding:0.5rem"; 

// we have setAttribute() method so that we can set the properties for a particular element.  
let firstElement = document.querySelector('#fdiv'); 
console.log(firstElement);

firstElement.setAttribute('class','divclass');

// If we want to change the class to secondDivClass then : 
firstElement.setAttribute('class','secondDivClass'); 

// suppose we want to make changes in the styling elements then : 
firstElement.setAttribute('style',"padding : 0.2rem"); 


// if we want to change the margin then : 
let fpara = $0;
console.log(fpara);

fpara.setAttribute('style','margin:1rem'); 


// Now , Next we have .className so that we can get the className of any element , also we can add multiple class elements 
fpara.className // through this we'll get the class name for the element. 

// now if we want to add multiple class for the 'fpara' then :
fpara.className = "first,second"; 
console.log(fpara);


// Now next we have .clasList , through this we can 'get' the multiple classes list in the form of array/list . 
// add : we can add any class we want 
// remove : we can remove any class we want. 
// toggle : means we can remove the present feature , and add new one or else not present then create it. 
// contains : means we can check whether this particular element has this class or not. 
let fpara = document.querySelector('#fpara'); 
console.log(fpara.classList); 

fpara.classList.add('thirdClass'); 
console.log(fpara.classList); 

// if we want to remove the a particular class then : 
fpara.classList.remove("thirdClass"); 

// now if we use toggle 
fpara.classList.toggle('thirdClass'); 
// now in this case if class contains the name : "thirdClass" then it will remove it. 
// if it's not present in the class name then the toggle will add it. 



// Next , we have contains : 
fpara.classList.contains('fistClass'); 
fpara.classList.contains('thirdClass'); 













