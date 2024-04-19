function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    if (menuItems.classList.contains("hidden")) {
        menuItems.classList.remove("hidden");
        menuItems.classList.add("show");
    } else {
        menuItems.classList.add("hidden");
        menuItems.classList.remove("show");
    }
}

document.querySelectorAll(".mobile-nav-link").forEach(el => {
    el.addEventListener("click", () => {
        toggleMenu()
    })
})


