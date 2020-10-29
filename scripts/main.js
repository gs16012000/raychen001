/* 
Everything in between is a comment.
 */
// This is a comment

//替換標題h1
//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

//彈出視窗
//alert('hello!');

//點選圖片時換圖片
var myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jpg-icon.jpg') {
      myImage.setAttribute ('src','images/jpg-icon-2.jpg');
    } else {
      myImage.setAttribute ('src','images/jpg-icon.jpg');
    }
}
//客製化用戶歡迎標題及更新按鈕
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}