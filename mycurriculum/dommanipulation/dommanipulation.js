// 1 - Create an HTML page with a button. When the button is clicked, display an alert.

document.addEventListener("DOMContentLoaded", function() {
    
    const button = document.getElementById("myButton");
    button.addEventListener("click", function() {
        alert("Button clicked!");
    });
});

// 2 - Change the text of a paragraph element using JavaScript

const paragraph = document.getElementById("myParagraph").innerHTML="I changed the text :-)";

// 3 - Change the background color of a div element using JavaScript

var myDiv = document.getElementById('myDiv');

myDiv.style.backgroundColor = "pink";

// 4 - Hide an HTML element using JavaScript

var mySpan = document.getElementById('mySpan');

mySpan.style.visibility = "hidden";

// 5 - Show a hidden HTML element using JavaScript

var myHeading = document.getElementById('myHeading');

myHeading.style.visibility = "visible";


// 6 - Toggle the visibility of an HTML element when a button is clicked.

const actionButton = document.getElementById('myActionButton');

actionButton.addEventListener("click", function(){

    const hiddenElement = document.getElementById('myHiddenElement');

   if (hiddenElement.style.visibility === "hidden") {
    hiddenElement.style.visibility = "visible"
   } else {
    hiddenElement.style.visibility = "hidden"
   }
   
});

// 7 - Add a new list item to an existing unordered list using JavaScript.

const addButton = document.getElementById('triggerAdd');


addButton.addEventListener("click", 

function appendLi() {
    var myUnorderedList = document.getElementById("myUnorderedList");
    var myUnorderedListItem = document.createElement("li"); // Creating a list item
    var text = document.createTextNode("3D"); // Creating a text node for the new list item
    myUnorderedListItem.appendChild(text); // Adding the text node to the list item  
    myUnorderedList.appendChild(myUnorderedListItem); // Adding the list item to the unordered list
}
);

