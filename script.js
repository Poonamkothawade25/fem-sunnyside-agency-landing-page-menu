const menuBtn = document.getElementById("menu-icon");
const menu = document.getElementsByClassName("menu-overlay")[0];
console.log(menu)

menuBtn.addEventListener("click", () => {
    if (!menu.classList.contains("open-menu")) {
        menu.classList.add("open-menu"); 
    }
    else {
        menu.classList.remove("open-menu"); 
    }
})