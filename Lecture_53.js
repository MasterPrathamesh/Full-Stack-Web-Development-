// Today we are going to learn about : Browser Events.
/* 
Event : in simple terms , events are just simple announcements. 
for ex: any action you do is an event, like : scroll,click, double click etc. 
Every event has one action attached to it. 

To see how many events we have : we have one function that is --> monitorEvents()
Now we can directly work on any website by clicking inspect and understand the Events by using the console. 
Now , we are redicting to CodeHelp Website.

Here's the printed output in the console while inspecting : 

monitorEvents(document);

VM765:1 pointerover PointerEvent {isTrusted: true, pointerId: 2, width: 45.783016204833984, height: 45.783016204833984, pressure: 1, …}
VM765:1 pointerenter PointerEvent {isTrusted: true, pointerId: 2, width: 45.783016204833984, height: 45.783016204833984, pressure: 1, …}
VM765:1 pointerdown PointerEvent {isTrusted: true, pointerId: 2, width: 45.783016204833984, height: 45.783016204833984, pressure: 1, …}
VM765:1 touchstart TouchEvent {isTrusted: true, touches: TouchList, targetTouches: TouchList, changedTouches: TouchList, altKey: false, …}
VM765:1 pointerover PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
VM765:1 pointerenter PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
VM765:1 mouseover MouseEvent {isTrusted: true, screenX: 1005, screenY: 306, clientX: 2942, clientY: 354, …}
VM765:1 gotpointercapture PointerEvent {isTrusted: true, pointerId: 2, width: 1, height: 1, pressure: 0, …}
VM765:1 pointerup PointerEvent {isTrusted: true, pointerId: 2, width: 1, height: 1, pressure: 0, …}
VM765:1 lostpointercapture PointerEvent {isTrusted: true, pointerId: 2, width: 1, height: 1, pressure: 0, …}
VM765:1 pointerout PointerEvent {isTrusted: true, pointerId: 2, width: 1, height: 1, pressure: 0, …}
VM765:1 pointerleave PointerEvent {isTrusted: true, pointerId: 2, width: 1, height: 1, pressure: 0, …}
VM765:1 touchend TouchEvent {isTrusted: true, touches: TouchList, targetTouches: TouchList, changedTouches: TouchList, altKey: false, …}
VM765:1 pointerout PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
VM765:1 pointerleave PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
VM765:1 mouseout MouseEvent {isTrusted: true, screenX: 1005, screenY: 306, clientX: 2942, clientY: 354, …}
VM765:1 mouseleave MouseEvent {isTrusted: true, screenX: 1005, screenY: 306, clientX: 2942, clientY: 354, …}
VM765:1 mouseover MouseEvent {isTrusted: true, screenX: 1732, screenY: 116, clientX: 860, clientY: 573, …}
VM765:1 mousemove MouseEvent {isTrusted: true, screenX: 1732, screenY: 116, clientX: 860, clientY: 573, …}
VM765:1 mousedown MouseEvent {isTrusted: true, screenX: 1732, screenY: 116, clientX: 860, clientY: 573, …}
VM765:1 mouseup MouseEvent {isTrusted: true, screenX: 1732, screenY: 116, clientX: 860, clientY: 573, …}
VM765:1 click PointerEvent {isTrusted: true, pointerId: 2, width: 1, height: 1, pressure: 0, …}
VM765:1 mouseout MouseEvent {isTrusted: true, screenX: 1005, screenY: 306, clientX: 2942, clientY: 354, …}
VM765:1 mouseleave MouseEvent {isTrusted: true, screenX: 1005, screenY: 306, clientX: 2942, clientY: 354, …}



** If we want to stop the events in the console , we have another method which is : 
-- unmonitorEvents(doument); 

==================================================================================================

Next , we have Event-Target : 

Event-target is an entity on which certain action is performed. 
for ex: if anyone clicks on the button then some action will be performed after it. 

As we click on the entity the event is received on the entity and their may be a possibility that it will have a 
event listener that means some action will get performed on that entity. 

Their are Elements to add and remove the Listeners : 
1. addEventListener()
2. removeEventListener()


Let's talk about the syntax , how it works : 

<event-target>.addEventListener(<event-type>,<function-->which defines some action>)

*/


//This code is for addEventListener() : 
function changeText(){
    let fpara = document.getElementById('fpara'); 
    fpara.textContent = "Hello Pratham , hope you're doing well !!"; 
}

let fpara = document.getElementById('fpara'); 
fpara.addEventListener('click',changeText()); 


// Now let's see  how to remove the event listener through : remvoeEventListener()
fpara.removeEventListener('click',changeText()); 












