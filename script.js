'use strict';
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  const header = box.querySelector('.boxes');
  const info = box.querySelector('.info');
  
  header.addEventListener('click', function() {
    box.classList.toggle('active');
    info.style.display = info.style.display === 'block' ? 'none' : 'block';

    // Close other open boxes
    boxes.forEach(otherBox => {
      if (otherBox !== box) {
        otherBox.classList.remove('active');
        const otherInfo = otherBox.querySelector('.info');
        otherInfo.style.display = 'none';
      }
    });
  });
});

