console.log('Nick Israel');
let myText = document.querySelector('#userName p:nth-child(2)');
myText.style.color = 'red';
document.querySelector('.name1').style.backgroundColor='magenta';

let myName = document.querySelectorAll('#userName p');
for(let i=0; i<myName.length;i++){
    myName[i].style.color = 'green'
    // change the font size of all odd
    if(i%2===0){
        myName[i].style.fontSize = '2em'
    }
};
/* innerHTML */
let myDiv = document.querySelectorAll('p')[1];
myDiv.innerHTML = 'New text content using <em><b>innerHTML</em></b>'
/*   classList.add() */
document.querySelector('h1').classList.add('sub');
/* testing parent/sibling/child */
let listItem = document.querySelector('li:nth-child(2)');
/* creating elements and text nodes */
// step 1: create element
let myPara = document.createElement('p');
// step 2: create a content
let mySentence = document.createTextNode('This is the text for the new paragraph!');
// step 3A: append the text node into the new element
myPara.appendChild(mySentence);
myPara.classList.add('sub');
// step 3B: append the new element, with thext node, to the document
document.querySelector('div').appendChild(myPara);
/* remove element */
let myItem = document.querySelector('ul');
myItem.removeChild(myItem.children[2]);
/* events */
let btn = document.querySelector('.btn1');
btn.onclick = function(){alert('Hi There!')};
/* example guess a number */
let randomNum = function(){
    let radNum = Math.ceil(Math.random()*1000)
    return radNum
}

let guessNumDiv = document.querySelector('.guessNumber')
let btnGuess = document.querySelector('.btnGuessNum')

btnGuess.addEventListener('click', function(){
    guessNumDiv.innerHTML = randomNum()
})
/* mouse events */
let btnmouseEvent = document.querySelector('#btnMouseEvent')
let mouseoutDisplay = document.querySelector('.mouseoutDisplay')
let dblclickDisplay = document.querySelector('.dblclickDisplay')

btnmouseEvent.addEventListener('mouseout', function(){
    mouseoutDisplay.innerHTML += 'mouse out'
})

btnmouseEvent.addEventListener('dblclick', function(){
    dblclickDisplay.innerHTML += 'dblclick'
})
/* window event */
let topIcon = document.querySelector('.top')
window.addEventListener('scroll', function(){
    let yPosition = this.window.scrollY
    if(yPosition){
        topIcon.style.display = 'block'
    }
    else{
        topIcon.style.display = 'none'
    }
})