const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const hamburguesa1 = document.querySelector('.hamburguesa')


imagenes.forEach(imagen =>{
  imagen.addEventListener('click', ()=>{
   aparecerimagen(imagen.getAttribute('src'))
  })
})


contenedorlight.addEventListener('click', ()=>{
  if(e.target !== imageneslight){
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showimage')
  }
})

const aparecerimagen = (imagen)=>{
  imageneslight.src = imagen;
  contenedorlight.classList.toggle('show')
  imageneslight.classList.toggle('showimage')
  hamburguesa1.style.opacity ='0'

}
