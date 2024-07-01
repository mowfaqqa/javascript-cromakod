// The DOM (Document Object Model)
// When a web page is loaded, the browser creates a Document Object Model of the page.

// The HTML DOM model is constructed as a tree of Objects:

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can create new HTML events in the page

// METHOD & PROPERTY
// A method is an action you can carry out which normally is a function to do a particular thing.

// A property is a value you can set or get.

const house = {
  name: "Villa", // property
  getName: () => {
    // method
    console.log("the name of the house is Villa");
  },
};
// getElementById
// const paragraph = document.getElementById("paragraph");
// paragraph.innerText = "Hello World"
// getElementByClassNames
// const mainheadngs = document.getElementsByClassName("main-heading")
// querySelector
const mainHeading = document.querySelector(".main-heading");
mainHeading.style.color = "red";
mainHeading.style.textAlign = "center";
mainHeading.innerHTML = "<span>Hello PEOPLE</span>";

// create elements
const nameTag = document.getElementById("name");
const newHead = document.createElement("h2");
newHead.innerText = "Muwaffaq Aliyu";
nameTag.appendChild(newHead);

// removing elements
const myList = document.querySelector(".MyList");

myList.removeChild(myList.firstElementChild);

console.log(myList);

