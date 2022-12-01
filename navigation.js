let menuIcon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('header');

function toggleNav() {
  
  navigation.classList.toggle('toggle');
  
  header.classList.toggle('toggle');
  
}

menuIcon.addEventListener('click', toggleNav);