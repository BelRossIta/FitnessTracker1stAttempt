//Select some elements once outside of the function since these will never chang
// 'const' is for variable that can/will not be used again later on in the code
// document.querySelector() returns the first Element within the document that matches 
//specified selector or group of selectors. If no matches are found, null is returned

const secondWeek = document.querySelector("#weekTwo");

const newWeekContainer = document.querySelector("#new-week-container");

// 'let' declares re-assignable, block-scoped local variables, optionally
 // initializing each to a value
//Define the current number of weeks shown in form
let currentNumberOfWeeks = 2;
function plusContent(){
//make a copy of the second week
const newWeek = secondWeek.cloneNode(true);

//Remove the ID for the cloned week since the same ID would not
// be allowed to exist more than once in a document!
newWeek.attributes.removeNamedItem("id");

//Increase the number of weeks

//Incrementation
currentNumberOfWeeks++;

//Find the header inside the new week and update the text

newWeek.querySelector("h2").textContent="Week " + currentNumberOfWeeks;



//Put the new week into the container 

newWeekContainer.appendChild(newWeek);

}

//------------Reset button

const defaultWeeks = 2;
function resetWeeks(){
 //check if container exists, if not, recreate it
 if(!document.contains(newWeekContainer)) {
  newWeekContainer = document.createElement('div');  //make sure to give it the original id or class
  newWeekContainer.id ='newWeekContainer'; //or append to whichever parent it belongs
  document.body.appendChild(newWeekContainer);
 }

 while (newWeekContainer.children.length > defaultWeeks){
   newWeekContainer.removeChild(newWeekContainer.lastChild);
 }

 //clear the container and resert weeks count
 newWeekContainer.innerHTML = ''; //clears the content.
 currentNumberOfWeeks = defaultWeeks;
}

