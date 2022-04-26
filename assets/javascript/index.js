let body = document.querySelector("body")
let openMenu = document.querySelector(".open-menu")
let closeMenu = document.querySelector(".close-menu")

openMenu.addEventListener("click", function(){
    body.classList.add("menu-active")
})

closeMenu.addEventListener("click", function(){
    body.classList.remove("menu-active")
})