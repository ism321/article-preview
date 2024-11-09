const button = document.querySelector(".button")
const dissmiss = document.querySelector(".dissmiss")

button.addEventListener("click", function (e){
    e.preventDefault();
  dissmiss.classList.toggle('hidden')
  
  
})