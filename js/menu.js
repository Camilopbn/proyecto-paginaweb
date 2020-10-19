const hamburguesa = document.querySelector('.hamburguesa')
const menu =document.querySelector('.menu-navegacion')

/*console.log(menu)
console.log(hamburguesa)*/

hamburguesa.addEventListener('click', ()=>{
  menu.classList.toggle("spread")
})


window.addEventListener('click', ()=>{
  if(menu.classList.contains('spread') && e.target != menu &&  e.target  != hamburguesa){
    
     
     menu.classList.toggle("spread")
               
})