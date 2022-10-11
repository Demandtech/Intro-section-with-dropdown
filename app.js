'use strict'


const menuOpen = document.querySelector(".open-hamburger");
const menuClose = document.querySelector('.close-hamburger')
const navbar = document.querySelector('.navbar')

menuOpen.addEventListener('click', function(){
  navbar.classList.add('open');
});

menuClose.addEventListener('click', function(){
    navbar.classList.remove('open')
});

document.querySelector('.nav-list').addEventListener('click', (e)=>{
 e.preventDefault()
 const dropdown = e.target;
 const CompanydropdownList = document.querySelector(".company-dropdown-list");
 const CompanydropdownIcon = document.querySelector(".company-dropdown-icon");
 const featuresdropdownList = document.querySelector(".feature-dropdown-list");
 const featuresdropdownIcon = document.querySelector(".feature-dropdown-icon");

 if(dropdown.classList.contains('company-link-dropdown') || dropdown.classList.contains('company-dropdown-icon')){
   CompanydropdownList.classList.toggle('dropdown');
   CompanydropdownIcon.classList.toggle('translate')
 } else if(dropdown.classList.contains('feature-link-dropdown') || dropdown.classList.contains('feature-dropdown-icon')){
   featuresdropdownList.classList.toggle("dropdown");
   featuresdropdownIcon.classList.toggle("translate");
 }
})



