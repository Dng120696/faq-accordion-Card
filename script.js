'use strict';

const box = document.querySelectorAll('.box');



// console.log(boxes);

for(let i = 0;i < box.length;i++){
  box[i].addEventListener('click', () =>{

    box[i].classList.toggle('show');
  });
}



