const menuItems = document.getElementById("menuItems");
const menuIcon  = document.getElementById("menuIcon");

menuIcon.addEventListener("click", (e)=> {
    var menuItems = e.target.nextElementSibling;
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block";
        menuItems.className = "show"
    } else {
        menuItems.style.display = "none";
        menuItems.className = "hidden"
    }
    if (e.target.textContent == `x`) {
        e.target.textContent = `☰`
    } else {
        e.target.textContent = `x`
    }
})

const smallScreen = document.querySelectorAll(".small-screen")

smallScreen.forEach(el => () => {
    el.addEventListener("click", (ev) => {
        ev.target.className.style.color = "orange"
        console.log("kuk small-screen ev targetclicked");
    })
})

// document.querySelector("#menuIcon").addEventListener("click", (e) => {
//     if (e.target.textContent == `x`) {
//         e.target.textContent = `☰`
//     } else {
//         e.target.textContent = `x`
//     }
// })