// const container = document.querySelector('.container');


const board = document.querySelector('#board');
const SQUARE_NUMBER = 700;
const colors = ['#e74c3c' , '#8e44ad' , '#3498db' ,'#e67e22' ,'#2ecc71' ,];

for (i = 0; i < SQUARE_NUMBER; i++){
    const square  = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () =>{
        setColor(square);
    });
    square.addEventListener('mouseleave', () =>{
        removeColor(square);
    });

    board.append(square);
}


 function setColor (element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
 }
 function removeColor (element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
 }
 function getRandomColor (){
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
 }