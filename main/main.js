'use strict'
// menu button functionality

const menuOpen = document.getElementById("menuButton")
const navMenu = document.querySelector(".menu-hidden")
menuOpen.addEventListener("click",function(){
    navMenu.classList.toggle("menu-hidden")
    navMenu.classList.toggle("menu-visible")
})


document.getElementById('categoryTitle').innerText = '</' + document.getElementById('categoryTitle').innerText;