var elBtn = document.querySelector(".plan__btn");
var elModal = document.querySelector(".plan__modal");

elBtn.addEventListener("click", function(){
    elModal.classList.add("plan__modal--active")
})