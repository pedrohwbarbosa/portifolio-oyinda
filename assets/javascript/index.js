let body = document.querySelector("body")
let openMenu = document.querySelector(".open-menu")
let closeMenu = document.querySelector(".close-menu")
let links = document.querySelectorAll(".link")


for (let index = 0; index < links.length; index++){
    let link = links[index];

    links[index].addEventListener("click", function(){
        endMenu()
    })
}


openMenu.addEventListener("click", function(){
    body.classList.add("menu-active")
})

closeMenu.addEventListener("click", function(){
    endMenu()
})

function endMenu() {
    body.classList.remove("menu-active")
}