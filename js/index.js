var menuItems = document.getElementById("menuItems");
var menuIcon  = document.getElementById("menuIcon");

menuIcon.addEventListener("click", (e)=> {
    var menuItems = e.target.nextElementSibling;
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block";
        menuItems.className = "show"
    } else {
        menuItems.style.display = "none";
        menuItems.className = "hidden"
    }
})

document.querySelector("#menuIcon").addEventListener("click", (e) => {
    if (e.target.textContent == `x`) {
        e.target.textContent = `☰`
    } else {
        e.target.textContent = `x`
    }
})