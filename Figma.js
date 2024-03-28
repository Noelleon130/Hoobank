const menu = document.querySelector('#button')
const close = document.querySelector('#cancel')
const nav = document.querySelector('nav')
menu.addEventListener('click', ()=>{
  nav.classList.add('open-nav')
})
close.addEventListener('click', ()=>{
  nav.classList.remove('open-nav')
})