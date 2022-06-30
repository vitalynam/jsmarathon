const container = document.querySelector('.container');
const btnUp = document.querySelector('.control__btn_up');
const btnDown = document.querySelector('.control__btn_down');
const sidebar = document.querySelector('.sidebar');
const contentItem = document.querySelector('.content');
const itemCount = contentItem.querySelectorAll('div').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(itemCount - 1) *100}vh`;

btnUp.addEventListener('click' , () =>{
    changeSlide('up');
} );
btnDown.addEventListener('click' , () =>{
    changeSlide('down');
} );

function changeSlide(direction){
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex === itemCount){
            activeSlideIndex = 0;
        }
    }else if (direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = itemCount -1 ;
        }
    }
const containerHeight = container.clientHeight;
contentItem.style.transform = `translateY(-${activeSlideIndex * containerHeight}px)`;
sidebar.style.transform = `translateY(${activeSlideIndex * containerHeight}px)`;
}