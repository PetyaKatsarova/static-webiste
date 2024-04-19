function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    if (menuItems.classList.contains("hidden")) {
        menuItems.classList.remove("hidden");
        menuItems.classList.add("show");
        menuItems.style.display="block"
    } else {
        menuItems.classList.add("hidden");
        menuItems.classList.remove("show");
    }
}

document.getElementsByClassName("mobile-nav-link").forEach(el => {
    el.addEventListener("click", () => {
        toggleMenu()
    })
})


