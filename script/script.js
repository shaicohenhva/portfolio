// Hamburger menu
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('.nav-links li');
var line = document.querySelector('.line');

// Dropdown list
var plusButtonOne = document.querySelector(".plus-Btn-One");
var plusButtonTwo = document.querySelector(".plus-Btn-Two");
var plusButtonThree = document.querySelector(".plus-Btn-Three");

var listItemOne = document.querySelector(".itemOne");
var listItemTwo = document.querySelector(".itemTwo");
var listItemThree = document.querySelector(".itemThree");

// Hamburger menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("openL");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});

// Drop down list 1
function showText(){
    listItemOne.classList.toggle("showTextOne");
    console.log('deze function werkt 1');
}

plusButtonOne.addEventListener("click", showText);

// Drop down list 2
function showTextTwo(){
    listItemTwo.classList.toggle("showTextTwo");
    console.log('deze function werkt 2');
}

plusButtonTwo.addEventListener("click", showTextTwo);

// Drop down list 3
function showTextThree(){
    listItemThree.classList.toggle("showTextThree");
    console.log('deze function werkt 3');
}
console.log(plusButtonThree);
plusButtonThree.addEventListener("click", showTextThree);