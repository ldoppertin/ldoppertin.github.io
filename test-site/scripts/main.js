var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kevin_the_tortoise.jpg') {
      myImage.setAttribute ('src','images/meme_usethefont.jpg');
    } else {
      myImage.setAttribute ('src','images/kevin_the_tortoise.jpg');
    }
}



function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my personal Website, ' + myName + '!';
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}  

myButton.onclick = function() {
    setUserName();
  }

