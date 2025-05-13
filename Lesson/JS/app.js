// Grabs 'h1' tag from index html
let myName = document.getElementById('myName');
// Changes text from javascript
myName.innerText = 'Terrell';

const thingsILike = ['Video Games', 'Hanging Out', 'Coding'];

// Grabs a group of elements from index html
let list = document.querySelectorAll('.my-items');
// Selecting specific item within group
let listItem = document.querySelector('#myList li:nth-child(2)');

// Applies text to each item using a variable within a for loop
for (let i = 0; i < list.length; i++) {
    list[i].innerText = thingsILike[i];
    console.log(list[i]);
}

// Grabbing ul from index html
let parentEl = document.getElementById('myList');

// Creating Elements and Tags
let item = document.createElement('li');
item.innerText = 'Eating';

// Appending 'item' from HTML doc
parentEl.appendChild(item);

// Dom styling and changing text
let paragraph = document.querySelector('p');
paragraph.style.fontSize = '25px';

// DOM EventListeners
// EventListeners are waiting for an event to fire off
let button = document.getElementById('here');
button.addEventListener('click', colorList);

let relist = document.querySelectorAll('li');


function colorList() {
    for (i = 0; i < relist.length; i++) {
        relist[i].style.color = 'purple';
    }
}
