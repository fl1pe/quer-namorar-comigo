const change = document.querySelector(".change");
const move = document.querySelector(".move");
const hidden = document.querySelector(".hidden");
const container = document.querySelector(".container");
const gato = document.querySelector(".gato");

function random(){
  const min = 100;
  const max = 1000;
  const random = Math.floor(Math.random() * (max + min) - min);
  return random;
}

container.addEventListener('click', (e) => {
  if(e.target.classList.contains('change')){
    body.style.cssText = 
    'background-image: url(./img/images.jpeg);'
  }
})

container.addEventListener('mouseover', (e) => {
  const elemento = e.target;
  // console.log(elemento)
  if (elemento.classList.contains('move')){
    move.style.cssText = 
    `left: ${random()}px`,
    `top: ${random()}px`
  }
})

random()