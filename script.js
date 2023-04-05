let show = true

const menuSection = document.querySelector('#menu-sec')
console.log(menuSection)


const  menuBurguer = menuSection.querySelector('#menu-bg')

menuBurguer.addEventListener("click", () =>{
    menuSection.classList.toggle("on", show)
    show = !show
    
})